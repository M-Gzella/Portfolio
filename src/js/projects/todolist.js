const todoInput = document.querySelector('.todo-input');
const addBtn = document.querySelector('.add-btn');
const todoList = document.querySelector('.todo-list ul');
const error = document.querySelector('.alert-info');

const popup = document.querySelector('.popup');
const submitBtn = document.querySelector('.accept');
const cancelBtn = document.querySelector('.cancel');
const popupInfo = document.querySelector('.popup-info');
const popupInput = document.querySelector('.popup-input');


const checkForm = (input, error) => {
    if (input.value === '') {
        error.textContent = 'Wypełnij treść zadania';
        return false;
    } else {
        error.textContent = '';
        return true;
    }
}

const createNewTask = (name) => {
    let tasks = JSON.parse(localStorage.getItem('data'));

    let task = {
        name: name,
        status: 'active'
    }

    tasks.push(task);

    localStorage.setItem('data', JSON.stringify(tasks));
}

const refreshTaskList = () => {
    todoList.innerHTML = '';
    let tasks = JSON.parse(localStorage.getItem('data'));

    if (tasks.length === 0) {
        error.textContent = 'Brak zadań na liście';
    } else {
        error.textContent = '';
    }

    tasks.forEach(function (task, key){
        const newLi = document.createElement('li');
        newLi.setAttribute('id', key);
        newLi.classList.add(task.status);
        newLi.innerHTML = `
            ${task.name}
            <div class="tools">
                <button data-id='${key}' class="complete"><i class="fas fa-check"></i></button>
                <button data-id='${key}' class="edit">EDIT</button>
                <button data-id='${key}' class="delete"><i class="fas fa-times"></i></button>
            </div>
        `
        todoList.append(newLi);
    })

    let completeBtns = document.querySelectorAll('.tools .complete');
    let deleteBtns = document.querySelectorAll('.tools .delete');
    let editBtns = document.querySelectorAll('.tools .edit');

    completeBtns.forEach(el => el.addEventListener('click', function(){
        setTaskStatus(this.dataset.id);
    }))
    deleteBtns.forEach(el => el.addEventListener('click', function(){
        deleteTask(this.dataset.id);
    }))
    editBtns.forEach(el => el.addEventListener('click', function(){
        showEditPopup(this.dataset.id);
    }))
}

const setTaskStatus = (id) => {
    let tasks = JSON.parse(localStorage.getItem('data'));
    let task = tasks[id];

    task.status==='completed'? task.status='active':task.status='completed';

    tasks[id] = task;
    localStorage.setItem('data', JSON.stringify(tasks));
    refreshTaskList();
}

const deleteTask = (id) => {
    let tasks = JSON.parse(localStorage.getItem('data'));

    tasks.splice(id, 1);

    localStorage.setItem('data', JSON.stringify(tasks));
    refreshTaskList();
}

const changeTask = (id, name) => {
    let tasks = JSON.parse(localStorage.getItem('data'));
    let task = tasks[id];
    task.name = name;

    tasks[id] = task;

    localStorage.setItem('data', JSON.stringify(tasks));
    refreshTaskList();
}

const showEditPopup = (id) => {
    popup.style.display = 'flex';
    popup.setAttribute('data-id', id);
}

const closePopup = () => {
    popup.style.display = 'none';
    popupInfo.textContent = '';
}

const checkJSON = (str) => {
    try{
        JSON.parse(str);
    }catch(e){
        return false;
    }
    return true;
}

addBtn.addEventListener('click', ()=>{
    if (checkForm(todoInput, error)) {
        createNewTask(todoInput.value);
        refreshTaskList();
        todoInput.value = '';
    }
})

submitBtn.addEventListener('click', e=>{
    if (checkForm(popupInput, popupInfo)) {
        changeTask(popup.dataset.id, popupInput.value);
        refreshTaskList();
        popupInput.value = '';
        closePopup();
    }
})

cancelBtn.addEventListener('click', closePopup)

todoInput.addEventListener('keyup', e =>{
    if (e.key === 'Enter') {
        if (checkForm(todoInput, error)) {
            createNewTask(todoInput.value);
            refreshTaskList();
            todoInput.value = '';
        }
    }
})

window.addEventListener('DOMContentLoaded', ()=>{
    if (localStorage.getItem('data')) {
        let data = localStorage.getItem('data')
        if (data.length === 0) {
            localStorage.setItem('data', JSON.stringify([]));
        }
        else if (!checkJSON(data)) {
            localStorage.setItem('data', JSON.stringify([]));
        }
        else if (!Array.isArray(JSON.parse(data))) {
            localStorage.setItem('data', JSON.stringify([]));
        }
    } else {
        localStorage.setItem('data', JSON.stringify([]));
    }
    refreshTaskList();
})