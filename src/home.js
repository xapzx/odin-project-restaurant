import menu from './menu.js'
import contact from './contact.js'

const mainElement = document.querySelector('main');
const navToggler = document.querySelector('.navbar-toggler');
const togglerIcon = navToggler.querySelector('span');
const menuItems = document.querySelectorAll('.nav-link');
const infoContainer = document.querySelector('.main-info');

// Change mobile menu button image
navToggler.addEventListener('click', () => {
    togglerIcon.classList.toggle('navbar-toggler-icon-custom-close');        
});

// Adds functionality to menu navigation
// Dynamically generates HTML for each section (Home, Menu, Contact)
// Closes mobile expanded menu when selected
menuItems.forEach(item => {
    if(item.id === "home-btn") {
        item.addEventListener('click', () => {
            if(item.classList.contains('active')) {
                return;
            }

            mainElement.textContent = '';
            const headline = document.createElement('div');
            headline.textContent = "Experience Authentic Vietnamese Cuisine at Green Tea House!";
            headline.classList.add('container', 'headline');
            mainElement.appendChild(headline);
            infoContainer.style.display = "block";
        });
    } else {
        item.addEventListener('click', () => {
            if(item.classList.contains('active')) {
                return;
            }

            hideMain();
            if(item.id === "menu-btn") {
                menu();
            } else {
                contact();
            }
        });
    }

    item.addEventListener("click", () => {
        activateButton(item);
        document.querySelector('#navbarNav').classList.toggle('show');
        const toggler = document.querySelector('.navbar-toggler-icon-custom');
        if(toggler.classList.contains('navbar-toggler-icon-custom-close')) {
            toggler.classList.remove('navbar-toggler-icon-custom-close');
        }
    });
});

// Hides the main information section when clicking on 'menu' or 'contact'
function hideMain() {
    if(infoContainer !== null) {
        infoContainer.style.display = "none";
    }
    mainElement.textContent = '';
}

// Add 'active' class to given element and remove from the rest
// Parameter: Element to add 'active' class (One of the navbar items)
function activateButton(button) {
    menuItems.forEach((currentBtn) => {
        if (currentBtn.id !== button.id) {
            currentBtn.classList.remove("active");
        }
    });
  
    button.classList.add("active");
}