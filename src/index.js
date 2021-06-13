import cardTemplate from './templates/cards.hbs';
import cards from './menu.json'
import './sass/main.scss';


const menuCards = document.querySelector('.js-menu');

const cardMarkup = createMenuCardMarkup(cards);

menuCards.insertAdjacentHTML('beforeend', cardMarkup);

function createMenuCardMarkup(cards) {
    return cards.map(card => cardTemplate(card)).join('');
}


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const select = document.querySelector('.theme-switch__toggle');

  select.addEventListener('change', (e) => {
    if (localStorage.getItem('theme') === Theme.DARK) {
        localStorage.setItem('theme', Theme.LIGHT);
    }
    else {
        localStorage.setItem('theme', Theme.DARK);
    }
    addDarkMode();
});

function addDarkMode() {
    if (localStorage.getItem('theme') === Theme.DARK) {
        document.querySelector('body').classList.add(Theme.DARK);
        select.setAttribute('checked', true);
    }
    else {
        document.querySelector('body').classList.remove(Theme.DARK);
    }
}
addDarkMode();
