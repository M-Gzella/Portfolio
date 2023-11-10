const username = document.querySelector('#username');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const popup = document.querySelector('.popup');


const showError = (input,msg) => {
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.error-text');

    formBox.classList.add('error');
    errorMsg.textContent = msg;
}

const clearError = input => {
    const formBox = input.parentElement;

    formBox.classList.remove('error');
}

const checkLenght = (input, min) => {
    if (input.value.length < min) {
        const label = input.previousElementSibling.innerText.slice(0, -1);
        showError(input, `${label} składa się z min ${min}`);
    }
}

const checkPassword = (pass1, pass2) => {
    if (pass1.value !== pass2.value) {
        showError(pass2, 'Hasła do siebie nie pasują');
        console.log(pass1);
        console.log(pass2);
    }
}

const checkForm = input => {
    input.forEach(el => {
        if (el.value === '') {
            showError(el, el.placeholder);
        } else {
            clearError(el);
        }
    })
}

const emailCheck = (email) => {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (reg.test(email.value)) {
        clearError(email);
    }else {
        showError(email, 'Nieprawidłowy email');
    }
}

const checkErrors = () => {
    const allInputs = document.querySelectorAll('.form-box');
    let errorCount = 0;

    allInputs.forEach(el => {
        if (el.classList.contains('error')) {
            errorCount++;
        }
    })

    if (errorCount === 0) {
        popup.classList.add('show-popup');
    }
}

sendBtn.addEventListener('click', e=> {
    e.preventDefault();
    checkForm([username, password, password2, email]);
    checkLenght(username, 3);
    checkLenght(password, 8);
    checkPassword(password, password2);
    emailCheck(email);
    checkErrors();
})

clearBtn.addEventListener('click', e => {
    e.preventDefault();
    [username, password, password2, email].forEach(el => {
        el.value = '';
        clearError(el);
    })
})