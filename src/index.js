// Import our custom CSS
import './style.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// Import modules
import home from "./home.js"
import footer from "./footer.js";
import menu from "./menu.js";

// Initial page load
home();
footer();

// Add functionality to nav bar buttons
const home_btn = document.querySelector('#home-btn');
const menu_btn = document.querySelector('#menu-btn');
const contact_btn = document.querySelector('#contact-btn');

const main = document.querySelector('main');
const content = document.querySelector('#content');
home_btn.addEventListener('click', () => {
    document.querySelector('.menu').remove();
    document.querySelector('.desc-container').style.display = 'block';
    document.querySelector('.headline').style.display = 'block';
});

menu_btn.addEventListener('click', () => {
    document.querySelector('.desc-container').style.display = 'none';
    document.querySelector('.headline').style.display = 'none';
    menu();
});

contact_btn.addEventListener('click', () => {
    // contact_btn();
});
