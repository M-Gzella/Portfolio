let theme_btn;
let body;
let wrapper;

let hamburger_btn;
let close_menu_btn;
let menu_mobile;
let menu_options_mobile;

let projects_pages;
let own_projects;
let my_projects;
let worked_with;

let arrow_left;
let arrow_right;
let arrow_right_back;
let arrow_left_back;

let slide_hover_btns;
let own_projects_slides_container;
let worked_with_slides_container;

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
    my_projects = document.querySelector('section.my_projects');
    own_projects = document.querySelector('section.own_projects');
    projects_pages = document.querySelectorAll('section.project_page');
    worked_with = document.querySelector('section.worked_with');
    arrow_left = document.querySelector('.arrow_left');
    arrow_right = document.querySelector('.arrow_right');
    arrow_left_back = document.querySelector('.arrow_left_back');
    arrow_right_back = document.querySelector('.arrow_right_back');
    slide_hover_btns = document.querySelectorAll('.slide a');
    own_projects_slides_container = document.querySelector('.own_projects_slides_container');
    worked_with_slides_container = document.querySelector('.worked_with_slides_container');
    wrapper = document.querySelector('body .wrapper');
    root = document.documentElement;
}


const prepareDOMEvents = () => {
    theme_btn.addEventListener('click', changeTheme);
    hamburger_btn.addEventListener('click', menuHandler);
    close_menu_btn.addEventListener('click', menuHandler);
    menu_options_mobile.forEach(el => el.addEventListener('click', menuHandler));
    arrow_left.addEventListener('click', handleMoveLeft);
    arrow_right.addEventListener('click', handleMoveRight);
    arrow_left_back.addEventListener('click', handleMoveBackLeft);
    arrow_right_back.addEventListener('click', handleMoveBackRight);
    slide_hover_btns.forEach(btn => btn.addEventListener('mouseover', hoverOver));
    slide_hover_btns.forEach(btn => btn.addEventListener('mouseout', hoverOut));
}

const sectionClassRemove = () => {
    projects_pages.forEach(project => {
        project.classList.remove('active');
        project.classList.remove('right');
        project.classList.remove('left');
    })
}

const handleMoveLeft = () => {
   sectionClassRemove();

    my_projects.classList.add('right');
    own_projects.classList.add('active');
    wrapper.style.overflowY = 'scroll';
    own_projects_slides_container.style.maxHeight = '40000px';
}

const handleMoveRight = () => {
    sectionClassRemove();

    my_projects.classList.add('left');
    worked_with.classList.add('active');
    wrapper.style.overflowY = 'scroll';
    worked_with_slides_container.style.maxHeight = '40000px';
}

const handleMoveBackLeft = () => {
    sectionClassRemove();

    worked_with.classList.add('right');
    my_projects.classList.add('active');
    wrapper.style.overflowY = 'hidden';
    worked_with_slides_container.style.maxHeight = '0';
}

const handleMoveBackRight = () => {
    sectionClassRemove();

    own_projects.classList.add('left');
    my_projects.classList.add('active');
    wrapper.style.overflowY = 'hidden';
    own_projects_slides_container.style.maxHeight = '0';
}

const changeTheme = () => {
    if (body.classList.value === 'light_theme') {
        let theme = JSON.parse(localStorage.getItem('theme'))
        body.classList.remove('light_theme');
        body.classList.add('dark_theme');

        theme = body.classList.value;


        rootColorsDark();
        localStorage.setItem('theme', JSON.stringify(theme));

    } else if (body.classList.value === 'dark_theme') {
        let theme = JSON.parse(localStorage.getItem('theme'));
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


const hoverOver = (event) => {
    const slide = event.target.closest('.slide');

    slide.classList.add('hover');
}

const hoverOut = (event) => {
    const slide = event.target.closest('.slide');

    slide.classList.remove('hover');
}

document.addEventListener('DOMContentLoaded', main);

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

window.addEventListener('DOMContentLoaded', ()=>{
    if(localStorage.getItem('theme')){
        let theme = localStorage.getItem('theme')
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


