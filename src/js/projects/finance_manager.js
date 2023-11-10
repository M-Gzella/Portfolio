const addBtn = document.querySelector('.add-transaction');
const removeAllBtn = document.querySelector('.delete-all');
const incomeArea = document.querySelector('.income-area');
const expensesArea = document.querySelector('.expenses-area');
const availableMoney = document.querySelector('.available-money');

const transactionPanel = document.querySelector('.add-transaction-panel');
const inputName = document.querySelector('#name');
const inputAmount = document.querySelector('#amount');
const category = document.querySelector('#category');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');

const lightBtn = document.querySelector('.light');
const darkBtn = document.querySelector('.dark');
let root = document.documentElement;

let sum = 0;
let cardID = 0;
let money = [];

const icons = {
    income: "fas fa-money-bill-wave",
    shopping: "fas fa-cart-arrow-down",
    food: "fas fa-hamburger",
    cinema: "fas fa-film"
}

const openPanel = () => {
    transactionPanel.style.display = 'flex';
}

const hidePanel = () => {
    transactionPanel.style.display = 'none';
    clear();
}

const checkError = (inputs) => {
    inputs.forEach(el => {
        if (el.value === '' || el.value === 'none') {
            el.classList.add('error');
        } else {
            el.classList.remove('error');
        }
    })
}

const checkForm = () => {
    if (inputName.value !== '' && inputAmount.value !== '' && category.value !== 'none') {
        const newName = inputName.value;
        const newAmount = inputAmount.value;
        const newCategory = category[category.selectedIndex].value;

        money.push(parseFloat(newAmount));
        hidePanel();
        createElement(newName, newAmount, newCategory);
    }
}

const createElement = (newName, newAmount, newCategory) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('transaction');
    newDiv.setAttribute('id', cardID);
    newDiv.innerHTML = `
  <p class="transaction-name"><i class="${icons[newCategory]}"></i>${newName}</p>
  <p class="transaction-amount">${newAmount}zł<button class="delete"><i class="fas fa-times" onclick="deleteOne(${cardID})"></i></button></p>
  `;
    if (newAmount >= 0) {
        incomeArea.append(newDiv);
    }else {
        expensesArea.append(newDiv);
    }
    cardID++;
    countMoney();
}

const clear = () => {
    inputName.value = '';
    inputAmount.value = '';
    category.value = 'none';
}

const deleteOne = (id) => {
    const elementToDelete = document.getElementById(id);

    const moneyElementToDelete = elementToDelete.querySelector('.transaction-amount');
    const moneyToDelete = parseFloat(moneyElementToDelete.textContent.slice(0,-2));
    const moneyOnIndex = money.indexOf(moneyToDelete);
    money.splice(moneyOnIndex, 1);

    countMoney();
    elementToDelete.remove();
}

const deleteAll = () => {
    const allElements = document.querySelectorAll('.transaction');

    allElements.forEach(el => el.remove());
    money = [];
    countMoney();
}


const countMoney = () => {
    sum = money.reduce((a, b) => a + b, 0);
    availableMoney.textContent = `${sum}zł`;
}

addBtn.addEventListener('click', openPanel);
cancelBtn.addEventListener('click', hidePanel);
saveBtn.addEventListener('click', () => {
    checkError([inputName, inputAmount, category]);
    checkForm();
})
removeAllBtn.addEventListener('click', deleteAll);

lightBtn.addEventListener('click', ()=> {
    root.style.setProperty('--first-color', '#f9f9f9');
    root.style.setProperty('--second-color', '#14161f');
    root.style.setProperty('--border-color', 'rgba(0,0,0,.2');
})
darkBtn.addEventListener('click', ()=> {
    root.style.setProperty('--first-color', '#14161f');
    root.style.setProperty('--second-color', '#f9f9f9');
    root.style.setProperty('--border-color', 'rgba(255,255,255,.2');
})