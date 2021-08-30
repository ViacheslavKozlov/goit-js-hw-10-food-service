import './styles.css';
import menuData from './data/menu.json';
// console.log(menuData);
import menuMarkup from './templates/menuMarkup.hbs';
// console.log(menuMarkup);
import './js/menuMarkup';
const menuList = document.querySelector('.js-menu');
// console.log(menuList);
const menuEls = createMenuEls(menuData);
menuList.insertAdjacentHTML('beforeend', menuEls);
// console.log(menuList);
function createMenuEls(menuData) {
    return menuData.map(menuMarkup)
        .join('')
};