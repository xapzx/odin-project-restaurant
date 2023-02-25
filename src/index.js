// Import our custom CSS
import './style.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// Import modules
import home from "./home.js"
import footer from "./footer.js";

const content = document.querySelector('.content');

content.appendChild(home());
content.appendChild(footer());
