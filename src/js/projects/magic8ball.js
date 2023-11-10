const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answers = ['Tak', 'Nie', 'Nie wiem...', 'Wolę o tym nie mówić', 'Skąd mam wiedzieć?', 'Na pewno!', 'Niemożliwe', 'Raczej tak', 'Raczej nie', 'Być może', 'Tego nikt nie wie'];

const shakeBall = () => {
    ball.classList.add('shake-animation');
    setTimeout(() => {
        ball.classList.remove('shake-animation');
        checkInput();
    },1000);
}

const checkInput = () => {
    if (input.value === '') {
        error.textContent = 'Musisz zadać jakieś pytanie!';
        answer.textContent = '';
    } else if(input.value.slice(-1) !==  '?') {
        error.textContent = 'Na końcu pytania musi być "?"';
        answer.textContent = '';
    } else {
        error.textContent = ' ';
        randomAnswer();
    }
}

const randomAnswer = () => {
    const randomNumber = Math.floor(Math.random()*11);
    answer.innerHTML = `<span>Odpowiedź: </span> ${answers[randomNumber]}`;
}

ball.addEventListener('click', () =>{
    shakeBall();
})

input.addEventListener('keyup', e=>{
    if (e.key === 'Enter') shakeBall();
})
