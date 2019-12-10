export { changeBackLayoutTheme };
import { Theme } from '../helpers/theme';

function changeBackLayoutTheme(ev) {
  console.log(ev.target.checked);

  if (ev.target.checked) {
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
    document.body.classList.add(Theme.DARK);
  } else {
    document.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
    document.body.classList.add(Theme.LIGHT);
  }
}
