const spanOne = document.querySelector('.one');
const spanTwo = document.querySelector('.two');
const input = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');


const celsiusChanger = () => {
    const sum = ((input.value*1.8)+32).toFixed(2);
    result.textContent = `${input.value}°C - ${sum}°F`;
}

const fahrChanger = () => {
    const sum = ((input.value/1.8)-32).toFixed(2);
    result.textContent = `${input.value}°F - ${sum}°C`;
}

const convert = () => {
    if (input.value === '') {
        result.textContent = 'Musisz podać jakąś wartość';
    } else {
        if (spanOne.textContent==='°C') {
            celsiusChanger();
        } else if (spanOne.textContent===('°F')) {
            fahrChanger();
        }
        input.value = '';
    }
}

const reset = () =>{
    result.textContent = '';
}

const change = () => {
    let x = spanOne.textContent;
    let y = spanTwo.textContent;
    spanOne.textContent = y;
    spanTwo.textContent = x;
    reset();
}


convBtn.addEventListener('click', convert);
resetBtn.addEventListener('click', reset);
changeBtn.addEventListener('click', change);
