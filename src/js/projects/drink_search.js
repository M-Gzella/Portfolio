const input = document.querySelector('.search');
const drinks = document.querySelectorAll('li');

const filter = (e) => {
    const text = e.target.value.toUpperCase();

    for (const drink of drinks) {
        if (drink.textContent.toUpperCase().indexOf(text) !== -1) {
            drink.style.display = 'block';
        } else {
            drink.style.display = 'none';
        }
    }
}

input.addEventListener('keyup', filter);