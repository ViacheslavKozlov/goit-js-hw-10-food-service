import './styles.css';
import menuData from './data/menu.json';
import menuMarkup from './templates/menuMarkup.hbs';

const refs = {
    menuList: document.querySelector('.js-menu'),
    body: document.querySelector('body'),
    switcher: document.querySelector('#theme-switch-toggle'),
};
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

// menu rendering
const menuEls = createMenuEls(menuData);

function createMenuEls(menuData) {
    return menuData.map(menuMarkup)
    .join('')
};

refs.menuList.insertAdjacentHTML('beforeend', menuEls);

// theme switching
refs.switcher.addEventListener('change', themeSwitcher)

savedTheme();

function savedTheme() {
    let savedTheme = localStorage.getItem('Theme');

    if (savedTheme === Theme.DARK) {
        refs.switcher.checked = true;
        refs.body.classList.add(Theme.DARK);
    }
    else {
        // refs.switcher.checked = !true;
        refs.body.classList.remove(Theme.DARK);
        refs.body.classList.add(Theme.LIGHT);
    }
};

function applyDarkTheme() {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
};

function applyLightTheme() {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
};

function themeSwitcher(evt) {
    if (evt.target.checked) {
        applyDarkTheme()
        // refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
        // localStorage.setItem('Theme', Theme.DARK);
    }
    else {
        applyLightTheme()
        // refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
        // localStorage.setItem('Theme', Theme.LIGHT);
    }
};
