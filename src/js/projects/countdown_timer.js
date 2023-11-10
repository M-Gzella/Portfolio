const settingsBtn = document.querySelector('.settings-btn');
const settings = document.querySelector('.settings');
const eventNameInput = document.querySelector('#event-name');
const eventDay = document.querySelector('#event-day');
const eventMonth = document.querySelector('#event-month');
const eventYear = document.querySelector('#event-year');
const eventImage = document.querySelector('#event-image');
const eventName = document.querySelector('.event');
const saveBtn = document.querySelector('.save');
const image = document.querySelector('.image-section');

const daysCount = document.querySelector('.days-count');
const hoursCount = document.querySelector('.hours-count');
const minutesCount = document.querySelector('.minutes-count');
const secondsCount = document.querySelector('.seconds-count');

let userTime;

const handleSettings = () => {
    settings.classList.toggle('active');
}

const handleSave = () => {
    setSettings();
    handleSettings();
}

const setSettings = () => {
    eventName.textContent = eventNameInput.value;
    image.style.backgroundImage = `url('${eventImage.value}')`;
    userTime = new Date(`${eventMonth.value} ${eventDay.value} ${eventYear.value}`);
    setTime();
}

const setTime = () => {
    const currentTime = new Date();
    const result = Math.floor((userTime - currentTime) / 1000);

    const days = Math.floor(result / 60 / 60 / 24);
    const hours = Math.floor(result / 60 / 60) % 24;
    const minutes = Math.floor(result / 60) % 60;
    const seconds = Math.floor(result % 60);

    daysCount.textContent = days;
    hoursCount.textContent = hours;
    minutesCount.textContent = minutes;
    secondsCount.textContent = seconds;
}

setSettings();
setInterval(setTime, 1000);

settingsBtn.addEventListener('click', handleSettings);
saveBtn.addEventListener('click', handleSave);