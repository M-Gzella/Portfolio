const input = document.querySelector('input');
const button = document.querySelector('button.send_btn');
const cityName = document.querySelector('.city-name');
const warning = document.querySelector('.warning');
const photo = document.querySelector('.photo');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');


const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = 'API_KEY';
const API_UNITS = '&units=metric';


const getWeather = () => {
    const city = input.value;
    const URL = API_LINK + city + API_KEY + API_UNITS;

    axios.get(URL).then(res => {
        const temp = res.data.main.temp;
        const hum = res.data.main.humidity;
        const status = Object.assign({}, ...res.data.weather);

        cityName.textContent = res.data.name;
        temperature.textContent = Math.floor(temp) + '°C';
        humidity.textContent = hum+'%';
        weather.textContent = status.main;

        if (status.id>=200 && status.id<=232) {
            photo.setAttribute('src', '../../dist/img/thunderstorm.png');

        } else if (status.id>=300 && status.id<=321) {
            photo.setAttribute('src', '../../dist/img/drizzle.png');

        } else if (status.id>=500 && status.id<=531) {
            photo.setAttribute('src', '../../dist/img/rain.png');

        } else if (status.id>=600 && status.id<=622) {
            photo.setAttribute('src', '../../dist/img/ice.png');

        } else if (status.id>=701 && status.id<=781) {
            photo.setAttribute('src', '../../dist/img/fog.png');

        } else if (status.id>=801 && status.id<=804) {
            photo.setAttribute('src', '../../dist/img//cloud.png');

        } else if (status.id === 800) {
            photo.setAttribute('src', '../../dist/img/sun.png');

        } else {
            photo.setAttribute('src', '../../dist/img/unknown.png');

        }
        warning.textContent = '';
        input.value = '';
    }).catch(err => warning.textContent = 'Wpisz poprwaną nazwę miasta');
}

button.addEventListener('click', getWeather)
input.addEventListener('keyup', e =>{
    if (e.key==='Enter') getWeather();
})