const sizeUpBtn = document.querySelector('.sizeUp');
const sizeDownBtn = document.querySelector('.sizeDown');
const colorBtn = document.querySelector('.color');
const text = document.querySelector('p');
let fontSize = window.getComputedStyle(text).fontSize;

const sizeUp = () => {
    if (parseInt(fontSize)>70) return
    fontSize = parseInt(fontSize)+5+'px';
    text.style.fontSize = fontSize;
}

const sizeDown = () => {
    if (parseInt(fontSize)<15) return;
    fontSize = parseInt(fontSize)-5+'px';
    text.style.fontSize = fontSize;
}

const newColor = () => {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    text.style.color = `rgb(${r},${g},${b})`;
}

sizeUpBtn.addEventListener('click', sizeUp);
sizeDownBtn.addEventListener('click', sizeDown);
colorBtn.addEventListener('click', newColor);


