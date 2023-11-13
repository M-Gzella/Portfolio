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

let stars;
let areThereStars = false;

let startX = null;
let startY = 0;

const phoneQuery = window.matchMedia('(max-width: 480px)');
const tabletQuery = window.matchMedia('(max-width: 768px)');
const desktopQuery = window.matchMedia('(min-width: 768px)');


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

    if (desktopQuery.matches) {
        window.addEventListener('wheel', throttledWheel);
    }

    if (tabletQuery.matches) {
        wrapper.addEventListener('touchstart', (event) => {
            const touch = event.touches[0];
            startY = touch.clientY;
        })
        wrapper.addEventListener('touchmove', throttledTouch);
    }

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

    if (phoneQuery.matches) {
        skill_cards.forEach(card => card.addEventListener('click', throttledSkillCard));
    }
}

// The function changes the theme of the page using the classes light_theme and dark_theme, which
// are added to the body. It also changes the colors in root and adds the current theme to
// local storage.
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

// The function triggers upon clicking a dot and retrieves the data attribute.
// Then, it iterates through each dot, removes its active class, and
// checks which dot in the forEach loop is equal to the one clicked,
// adding the active class to it. The same logic applies when adding the active class
// to the section.
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


// The function triggered by scrolling, iterates through all sections using a forEach loop
// and checks if a particular section is visible on the page. If so, it adds the index of the section
// to the currentkey variable.
// Then, the checkScrollUp function examines whether a scroll up or down has been performed, and accordingly
// adjusts the currentkey upward or downward to determine the section to be displayed.

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

// The function operates on the same principle as above, with the difference that it checks for touch events
// instead of scrolling. The finger swipe up or down must be greater/less than 100px (for
//the slider to function correctly).
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

    if (deltaY > 100) {
        nextKey = (currentKey === 0) ? 0 : currentKey - 1;
    } else if (deltaY < - 100) {
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

// The function retrieves information about the next section, then scrolls accordingly
// to its height and adds the section's ID to the URL.
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


// Functions for sliding the slider, retrieve the current width of the slide,
// and then appropriately slide the slider to the right/left by the width of the slide.

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

// Function for activating the skills card in the mobile version.
// It retrieves data from the card and checks if it has the active class; if so,
// the card returns to its original position, and classes are removed from the card.
// If it doesn't have the active class, it adds the active class to the clicked card,
// and the rest receive the hide class. Then, the skillCardMoveHandle function appropriately moves the card.

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

// Function for limiting the execution of a function.
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

const createStars = () => {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    if (phoneQuery.matches) {
        stars = 40;
    } else {
        stars = 80;
    }

    if (areThereStars === false) {
        for (let i = 0; i<stars; i++) {
            const newStar = document.createElement('span');
            let randomX = Math.floor(Math.random() * windowWidth);
            let randomY = Math.floor(Math.random() * windowHeight);

            newStar.classList.add('star');
            wrapper.append(newStar);

            newStar.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }
    }
    areThereStars = true;
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
    body.style.overflow = 'hidden';
    createStars();
})

window.addEventListener('popstate', (event) => {
    if (window.location.href.includes("#")) {
        const splitId = window.location.href.split('#');
        const urlId = splitId[1];
        checkActiveMenuItems(urlId);
    }
});
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
