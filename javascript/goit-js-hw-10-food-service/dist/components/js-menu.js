import template from '../helpers/template.hbs';
import menu from './menu.json';
const markup = template(menu);
export const elementsMenu = document.createElement('ul');
elementsMenu.classList.add('js-menu');
elementsMenu.insertAdjacentHTML('afterBegin', markup);
