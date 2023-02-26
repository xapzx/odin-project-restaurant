// Import our custom CSS
import './style.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// Import modules
import home from "./home.js"
import footer from "./footer.js";
import menu from "./menu.js";

const content = document.querySelector('.content');

content.appendChild(home());
document.querySelector('.menu-container').appendChild(menu());
content.appendChild(footer());