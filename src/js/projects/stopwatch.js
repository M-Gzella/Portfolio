const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const playBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const closeBtn = document.querySelector('.close');
const info = document.querySelector('.info');
const modal = document.querySelector('.modal-shadow');
const timeList = document.querySelector('.time-list');

const moreColors = document.querySelector('.more-colors');
const pallete = document.querySelector('.pallete');
const firstColor = document.querySelector('.first-color');
const secondColor = document.querySelector('.second-color');
const thirdColor = document.querySelector('.third-color');

let root = document.documentElement;


let seconds = 0;
let minutes = 0;
let timer;
let intervalInProgress = false;
let measurement = 0;


const handlePlay = () => {
    if (intervalInProgress === false) {
        timer = setInterval(()=> {
            if (seconds < 9) {
                seconds++;
                stopwatch.textContent = `${minutes}:0${seconds}`;
            } else if(seconds < 59) {
                seconds++;
                stopwatch.textContent = `${minutes}:${seconds}`;
            }
            else if (seconds >= 59) {
                seconds = 0;
                minutes++;
                stopwatch.textContent = `${minutes}:0${seconds}`;
            }
        }, 1000)
        intervalInProgress = true;
    }
}

const handlePause = () => {
    clearInterval(timer);
    intervalInProgress = false;

    if (seconds <= 9) {
        stopwatch.textContent = `${minutes}:0${seconds}`;
    } else {
        stopwatch.textContent = `${minutes}:${seconds}`;
    }
}


const handleStop = () => {
    intervalInProgress = false;
    time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`;

    if (stopwatch.textContent !== '0:00') {
        measurement++;
        const li = document.createElement('li');
        const span = document.createElement('span');

        li.textContent = `Pomiar nr ${measurement}`;
        timeList.append(li);
        li.append(span);

        span.innerHTML = stopwatch.textContent;

        time.style.visibility = 'visible';
        clear();
    }
}

const handleHistory = () => {
    timeList.classList.toggle('show');
}

const handleReset = () => {
    clear();
    time.style.visibility = 'hidden';
    measurement = 0;
    const allMeasurement = document.querySelectorAll('li');
    allMeasurement.forEach(li =>{
        li.remove();
    })
}

const handleModalShow = () => {
    if (!(modal.style.display === 'block')) {
        modal.style.display = 'block';
    } else {
        modal.style.display = 'none';
    }

    modal.classList.toggle('modal-animation');
}

const handleModalClose = () => {
    modal.style.display = 'none';
    modal.classList.remove('modal-animation');
}

const clear = () => {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;

    stopwatch.textContent = '0:00';
}

const showPallete = () => {
    pallete.classList.toggle('show-pallete');
}

playBtn.addEventListener('click', handlePlay);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
historyBtn.addEventListener('click', handleHistory);
info.addEventListener('click', handleModalShow);
closeBtn.addEventListener('click', handleModalClose);
moreColors.addEventListener('click', showPallete);
window.addEventListener('click', e => e.target === modal ? handleModalShow() : false);

firstColor.addEventListener('click', ()=>{
    root.style.setProperty('--first-color', '#ab0eb6');
    root.style.setProperty('--hover-color', '#8d0f96');
})
secondColor.addEventListener('click', ()=>{
    root.style.setProperty('--first-color', '#10ad81');
    root.style.setProperty('--hover-color', '#0d9d75');
})
thirdColor.addEventListener('click', ()=>{
    root.style.setProperty('--first-color', '#bb9f88');
    root.style.setProperty('--hover-color', '#957b65');
})
