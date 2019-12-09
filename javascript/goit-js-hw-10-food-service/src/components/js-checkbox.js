export const checkBox = document.createElement('div');
import { Theme } from '../helpers/theme';

checkBox.classList.add('checkboxBlock');
checkBox.insertAdjacentHTML(
  'afterbegin',
  '<label>wb_sunny</label><input/><label>brightness_3</label>',
);
checkBox.firstChild.classList.add('material-icons');
checkBox.firstChild.setAttribute('for', 'checkbox');
checkBox.lastChild.classList.add('material-icons');
checkBox.lastChild.setAttribute('for', 'checkbox');
checkBox.firstChild.nextSibling.classList.add('checkbox');
checkBox.firstChild.nextSibling.setAttribute('id', 'checkbox');
checkBox.firstChild.nextSibling.setAttribute('type', 'checkbox');
const backTheme = localStorage.getItem('theme');
document.body.classList.add(backTheme);
backTheme === Theme.DARK && (checkBox.firstChild.nextSibling.checked = true);
