const addBtn = document.querySelector('.add');
const removeAllBtn = document.querySelector('.delete-all');
const notePanel = document.querySelector('.note-panel');
const noteArea = document.querySelector('.note-area');
const error = document.querySelector('.error');

const category = document.querySelector('#category');
const text = document.querySelector('#text');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');

let cardID = 0;

const showPanel = () => {
    clear();
    notePanel.style.display = 'flex';
}

const hidePanel = () => {
    notePanel.style.display = 'none';
    clear();
}

const checkForm = () => {
    if (category.value === 0 || text.value === '') {
        error.style.visibility = 'visible';
    } else {
        const newCategory = category.options[category.selectedIndex].text;
        const newText = text.value;
        const newColor = category.value;
        error.style.visibility = 'hidden';
        craeteNote(newCategory, newText, newColor);
        clear();
        hidePanel();
    }
}

const craeteNote = (category, text, color) => {
    const newNote = document.createElement('div');
    newNote.classList.add('note');
    newNote.setAttribute('id', cardID);
    if (color === '2') {
        newNote.style.backgroundColor = '#e627f3';
    } else if (color === '3') {
        newNote.style.backgroundColor = '#0de5c7';
    }
    newNote.innerHTML =
        `<div class="note-header">
    <h3 class="note-title">${category}</h3>
    <button class="delete-note" onclick="deleteNote(${cardID})">
        <i class="fas fa-times icon"></i>
    </button>
    </div>
    <div class="note-body">
        ${text}
    </div>`;
    noteArea.append(newNote);
    cardID++;
}

const deleteAllNotes = () => {
    const allNotes = document.querySelectorAll('.note');

    allNotes.forEach(note => {
        note.remove();
    })
    cardID = 0;
}

const deleteNote = (id) => {
    const noteToDelete = document.getElementById(id);
    noteToDelete.remove();
}

const clear = () => {
    error.style.visibility = 'hidden';
    text.value = '';
    category.value = 0;
}

addBtn.addEventListener('click', showPanel);
cancelBtn.addEventListener('click', hidePanel);
saveBtn.addEventListener('click', checkForm);
window.addEventListener('keydown', e =>{
    e.key === 'Enter' ? checkForm() : false;
})
removeAllBtn.addEventListener('click', deleteAllNotes);