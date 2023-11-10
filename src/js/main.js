let menu_items;
let theme_btn;
let body;
let wrapper;

let hamburger_btn;
let close_menu_btn;
let menu_mobile;
let menu_options_mobile;

let slide_hover_btns;
let slider_btn_next;
let slider_btn_prev;
let slider;
let sliders;
let currentSlide = 0;

let skill_cards;
let sections;
let dots;

let startX = null;
let startY = 0;

const mediaQuery = window.matchMedia('(max-width: 480px)');

let root;

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
    setTheme();
}

const prepareDOMElements = () => {
    theme_btn = document.querySelector('.theme_btn');
    body = document.querySelector('body');
    hamburger_btn = document.querySelector('.hamburger_btn');
    close_menu_btn = document.querySelector('.close_menu');
    menu_mobile = document.querySelector('.menu_mobile');
    menu_options_mobile = document.querySelectorAll('.menu_mobile li');
    root = document.documentElement;
    sections = document.querySelectorAll('.wrapper .section');
    dots = document.querySelectorAll('.global_nav ul li a');
    menu_items = document.querySelectorAll('a.menu');
    slide_hover_btns = document.querySelectorAll('.slide a');
    slider_btn_prev = document.querySelector('.prev_btn');
    slider_btn_next = document.querySelector('.next_btn');
    sliders = document.querySelectorAll('.slide');
    slider = document.querySelector('.slider');
    wrapper = document.querySelector('.wrapper');
    skill_cards = document.querySelectorAll('.skill_card');
}


const prepareDOMEvents = () => {
    theme_btn.addEventListener('click', changeTheme);
    hamburger_btn.addEventListener('click', menuHandler);
    close_menu_btn.addEventListener('click', menuHandler);
    menu_options_mobile.forEach(el => el.addEventListener('click', menuHandler));

    window.addEventListener('wheel', throttledWheel);

    wrapper.addEventListener('touchstart', (event) => {
        const touch = event.touches[0];
        startY = touch.clientY;
    })
    wrapper.addEventListener('touchmove', throttledTouch);

    dots.forEach(dot => dot.addEventListener('click', dotActiveHandler));
    menu_items.forEach(item => item.addEventListener('click', menuItemActiveHandler))

    slide_hover_btns.forEach(btn => btn.addEventListener('mouseover', hoverOver));
    slide_hover_btns.forEach(btn => btn.addEventListener('mouseout', hoverOut));
    slider_btn_next.addEventListener('click', nextSlide);
    slider_btn_prev.addEventListener('click', prevSlide);

    slider.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
    })
    slider.addEventListener('touchmove', throttledDeltaX);
    slider.addEventListener('touchend', () => {
        startX = null;
    })

    if (mediaQuery.matches) {
        skill_cards.forEach(card => card.addEventListener('click', throttledSkillCard));
    }
}

// Funkcja zmienia theme strony za pomocą klasy light_theme oraz dark_theme, które
// dodaje do body. Zmienia też kolory w root oraz dodaje aktualny theme do
// localstorage
const changeTheme = () => {
    if (body.classList.value === 'light_theme') {
        let theme = JSON.parse(localStorage.getItem('theme'));
        body.classList.remove('light_theme');
        body.classList.add('dark_theme');

        theme = body.classList.value;


        rootColorsDark();
        localStorage.setItem('theme', JSON.stringify(theme));

    } else if (body.classList.value === 'dark_theme') {
        let theme = JSON.parse(localStorage.getItem('theme'))
        body.classList.remove('dark_theme');
        body.classList.add('light_theme');

        theme = body.classList.value;

        rootColorsLight();
        localStorage.setItem('theme', JSON.stringify(theme));
    }
}

const rootColorsLight = () => {
    root.style.setProperty('--main-theme', '#6FDCBF');
    root.style.setProperty('--accent-theme', '#F6F4F6');
    root.style.setProperty('--text-theme', '#404040');
}

const rootColorsDark = () => {
    root.style.setProperty('--main-theme', '#774069');
    root.style.setProperty('--accent-theme', '#29272A');
    root.style.setProperty('--text-theme', '#FAFAFA');
}

const menuHandler = () => {
    menu_mobile.classList.toggle('show');
}

//Funckja odpala się po kliknięciu w dota i pobiera data atrybut.
//Następnie przechodzi po każdym dotcie i usuwa mu klasę active i
//sprawdza który dot w foreachu równa się temu w który kliknięto i
//dodaje mu klasę active, taka sama logika jest przy dodawaniu klasy active
//do sekcji.
const dotActiveHandler = (event) => {
    const dotId = event.target.getAttribute('href').slice(1)
    sections.forEach(section => {
        section.classList.remove('active');
        if (dotId === section.id) {
            section.classList.add('active');
        }
    })
    dots.forEach(dot => {
        dot.classList.remove('active');
    })
    event.target.classList.toggle('active');
}


const checkActiveMenuItems = (id) => {
    sections.forEach(section => {
        section.classList.remove('active');
        if (id === section.id) {
            section.classList.add('active');
        }
    })

    dots.forEach(dot => {
        dot.classList.remove('active');
        if (id === dot.getAttribute('href').slice(1)) {
            dot.classList.add('active');
        }
    })
}
const menuItemActiveHandler = (event) => {
    const itemId = event.target.getAttribute('href').slice(1);

    checkActiveMenuItems(itemId);
}


//Funkcja wywołana użyciem scrolla, foreach przechodzi po wszystkich sekcjach i sprawdza czy dana sekcja
//jest widoczna na stronie, jezeli tak to dodaje do currentkey indeks sekcji z tablicy.
//Następnie funckja checkScrollUp sprawdza czy został użyty scroll w góre czy w dół i odpowiednio
//zmienia currentkey w góre lub w dół, aby uzyskać sekcje, która ma się pokazać.
const getCurrentSectionDesktop = (event) => {
    let currentKey, nextKey;
    let sectionsCount = sections.length;

    sections.forEach(function (section, key) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 0.5 && rect.bottom >= 0.5) {
            currentKey = key;
        }
    });

    if (checkScrollUp(event)) {
        nextKey = (currentKey === 0) ? 0 : currentKey - 1;
    } else {
        nextKey = (currentKey === sectionsCount - 1) ? sectionsCount - 1 : currentKey + 1;
    }

    return {
        key: nextKey,
        next: sections[nextKey],
    }
}

//Funkcja działa na tej samej zasadzie co wyżej z tym że sprawdzane jest dotknięcie urządzenia,
//a nie scroll. Przesunięcie palcem w góre lub w dół musi być większe/mniejsze niż 20px (aby
//slider działał poprawnie)
function getCurrentSectionMobile(event) {
    const touch = event.touches[0];
    const deltaY = touch.clientY - startY;

    let currentKey, nextKey;
    let sectionsCount = sections.length;

    sections.forEach(function (section, key) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 0.5 && rect.bottom >= 0.5) {
            currentKey = key;
        }
    });

    if (deltaY > 20) {
        nextKey = (currentKey === 0) ? 0 : currentKey - 1;
    } else if (deltaY < -20) {
        nextKey = (currentKey === sectionsCount - 1) ? sectionsCount - 1 : currentKey + 1;
    }

    return {
        key: nextKey,
        next: sections[nextKey],
    }
}


const sectionActiveHandler = (nextSection) => {

    sections.forEach(section => {
        if (nextSection.id === section.id) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    })
}

const dotScrollActiveHandler = (data) => {

    dots.forEach(function (dot, key) {
        if (data.key === key) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    })
}

//Funckja pobiera informacje o następnej sekcji, a następnie przesuwa się odpowiednio na
//jej wysokość i dodaje do URL id sekcji.
const handleActiveSectionDesktop = (event) => {
    const data = getCurrentSectionDesktop(event);
    const nextSection = data.next;

    sectionActiveHandler(nextSection);
    dotScrollActiveHandler(data);

    window.location.hash = nextSection.id;

    window.scrollTo({behavior: "smooth", top: nextSection.offsetTop});
}

const handleActiveSectionMobile = (event) => {
    const data = getCurrentSectionMobile(event);
    const nextSection = data.next;

    sectionActiveHandler(nextSection);
    dotScrollActiveHandler(data);

    window.location.hash = nextSection.id;

    window.scrollTo({behavior: "smooth", top: nextSection.offsetTop});
}

const checkScrollUp = (event) => {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}
const hoverOver = (event) => {
    const slide = event.target.closest('.slide');

    slide.classList.add('hover');
}

const hoverOut = (event) => {
    const slide = event.target.closest('.slide');

    slide.classList.remove('hover');
}


//Funckje do przesuwania slidera, pobierają aktualną szerokość slajdu,
//a następnie odpowiednio przesuwają slider w prawo/lewo o szerokość slajdu.
const nextSlide = () => {
    const slideWidth = sliders[currentSlide].offsetWidth
    if (currentSlide < sliders.length - 1) {
        currentSlide++;
        const pxToSlide = (slideWidth + 20) * currentSlide;
        slider.style.transform = `translateX(-${pxToSlide}px)`;
    } else {
        slider.style.transform = `translateX(0)`;
        currentSlide = 0;
    }
}

const prevSlide = () => {
    const slideWidth = sliders[currentSlide].offsetWidth;
    const sliderTransform = parseInt(slider.style.transform.slice(11, -3));
    if (currentSlide > 0) {
        currentSlide--;
        const pxToSlide = (sliderTransform + slideWidth + 20);
        slider.style.transform = `translateX(${pxToSlide}px)`;
    }
}

const checkDeltaX = (event) => {
    if (startX !== null) {
        const currentX = event.touches[0].clientX;
        const deltaX = currentX - startX;

        if (deltaX > 0) {
            prevSlide();
        } else {
            nextSlide();
        }
    }
}

//Funckja do aktywowania karty z umiejętnościami w wersji mobilnej.
//Pobiera dane karty i sprawdza czy posiada klasę active, jeżeli tak
//to karta wraca na miejsce i usuwane są klasy z karty.
//Jeżeli nie ma to dodaje active to klikniętej karty, a reszta otrzymuje klasę
//hide, a następnie funkcja skillCardMoveHandle przesuwa odpowiednio kartę.
const skillCardHandler = (event) => {
    const cardID = event.target.getAttribute('data-id');
    const thisCard = event.target;

    if (thisCard.classList.contains('active')) {
        thisCard.style.transform = 'translateY(0)';

        skill_cards.forEach(card => {
            card.classList.remove('hide');
            card.classList.remove('active');
        })

    } else {
        skill_cards.forEach(card => {
            if (card.getAttribute('data-id') === cardID) {
                thisCard.classList.add('active');
            } else {
                card.classList.add('hide');
            }
        })

        skillCardMoveHandle(cardID, thisCard);
    }
}

const skillCardMoveHandle = ($id, $card) => {
    const cardHeight = parseInt($card.offsetHeight) + 60;
    switch ($id) {
        case '0':
            setTimeout(() => {
                $card.style.transform = 'translateY(0)';
            }, 300)
            break;
        case '1':
            setTimeout(() => {
                $card.style.transform = `translateY(-${cardHeight}px)`;
            }, 300)
            break;
        case '2':
            setTimeout(() => {
                $card.style.transform = `translateY(-${(cardHeight)*2}px)`;
            }, 300)
            break;
    }
}

//Funkcja do ograniczania wykonywania się funkcji
function throttle(func, delay) {
    let lastCall = 0;
    return function () {
        const now = Date.now();
        if (now - lastCall >= delay) {
            func(event);
            lastCall = now;
        }
    }
}

const throttledWheel = throttle(handleActiveSectionDesktop, 500);
const throttledTouch = throttle(handleActiveSectionMobile, 500);
const throttledDeltaX = throttle(checkDeltaX, 500);
const throttledSkillCard = throttle(skillCardHandler, 500);

const setTheme = () => {
    let theme = JSON.parse(localStorage.getItem('theme'));

    if (theme.length === 0) {
        theme = body.classList.value;
        localStorage.setItem('theme', JSON.stringify(theme));
    } else {
        body.classList.value = theme;
        if (theme === 'dark_theme') {
            rootColorsDark();
        } else if (theme ==='light_theme') {
            rootColorsLight();
        }
        localStorage.setItem('theme', JSON.stringify(theme));
    }
}

const checkJSON = (str) => {
    try{
        JSON.parse(str);
    }catch(e){
        return false;
    }
    return true;
}

document.addEventListener('DOMContentLoaded', main);
window.addEventListener('load', (event) => {
    if (window.location.href.includes("#")) {
        const splitId = window.location.href.split('#');
        const urlId = splitId[1];
        checkActiveMenuItems(urlId);
    }
})
window.addEventListener('DOMContentLoaded', ()=>{
    if(localStorage.getItem('theme')){
        let theme = localStorage.getItem('theme');
        if(theme.length === 0){
            localStorage.setItem('theme', JSON.stringify([]));
        }
        else if(!checkJSON(theme)){
            localStorage.setItem('theme', JSON.stringify([]));
        }
        else if(!Array.isArray(JSON.parse(theme))){
            localStorage.setItem('theme', JSON.stringify([]));
        }
    }else{
        localStorage.setItem('theme', JSON.stringify([]));
    }
    setTheme();
})
