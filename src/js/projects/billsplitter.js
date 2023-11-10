const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const btn = document.querySelector('.count');
const error = document.querySelector('.error');
const costInfo = document.querySelector('.cost-info');
const result = document.querySelector('.cost');


const calculations = () => {
    const newPrice = parseFloat(price.value);
    const newPeople = parseInt(people.value);
    const newTip = parseFloat(tip.value);

    let sum = (newPrice + (newPrice * newTip)) / (newPeople);
    costInfo.style.display = 'block';
    result.textContent = sum.toFixed(2);
}

const formCheck = () => {
    if (price.value !== '' && people.value !== '' && tip.value !== '0') {
        calculations();
        error.textContent = '';
    } else {
        error.textContent = 'Uzupełnij wszystkie pola!';
        costInfo.style.display = 'none';
    }
}

btn.addEventListener('click', formCheck);
window.addEventListener('keyup', e => {
    if(e.key === 'Enter') formCheck();
})