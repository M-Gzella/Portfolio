const currentDay = document.querySelector('.current-day');
const funFact = document.querySelector('.fun-fact');

const facts = [
    'Krokodyl nie potrafi wystawić języka.',
    'Każdy człowiek spędził około pół godziny jako pojedyncza komórka.',
    'Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.',
    'Leniwce potrzebują dwóch tygodni na strawienie jedzenia.',
    'Goryle śpią nawet czternaście godzin dziennie.',
    'Język kameleona jest dwukrotnie dłuższy od jego ciała.',
    'Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.',
    'Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.',
    'Serce krewetki jest w głowie.',
    'Słonie są jednymi z nielicznych zwierząt, które potrafią rozpoznać siebie w lustrze.',
    'Świnie nie mogą fizycznie spojrzeć w niebo.',
    'Szczury oraz konie nie mogą wymiotować.',
    'Podobnie jak odciski palców, każdy język ludzki jest inny.',
    'W rzeczywistości delfiny są ślepe na kolor niebieski.',
    'Banany są owocami, ale rośliny bananowe nie są drzewami. To właściwie gigantyczne trawy!',
    'Wrony potrafią rozpoznawać ludzkie twarze i pamiętają je przez całe życie.',
    'Samica lwa wykonuje 90 procent polowań.'
];
const today = new Date();


const showRandomFact = () => {
    const randomFact = Math.floor(Math.random()*(facts.length-1));
    funFact.textContent = facts[randomFact];
}

showRandomFact();
currentDay.textContent = today.toLocaleDateString('pl', { weekday: 'long' });