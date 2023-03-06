import gth_icon from './images/gth.jpeg';
import footer from './footer.js'
import menu from './menu.js'

// Create Home page
// Appends the Navbar and Main section to the HTML file
function home() {
    const content = document.querySelector('#content');
    content.appendChild(navbar());
    content.appendChild(main());
    content.appendChild(information());
 }

// Create nav bar
// Returns JS generated Navbar HTML
function navbar() {
    const nav = document.createElement('nav');
    nav.classList.add('navbar', 'navbar-expand-lg');

    const container = document.createElement('div');
    container.classList.add('container-fluid');

    const logo = document.createElement('img');
    logo.classList.add('navbar-brand');
    logo.src = gth_icon;
    // logo.href = '#';
    // logo.innerText = "GREEN TEA HOUSE";

    const btn = document.createElement('button');
    btn.classList.add('navbar-toggler', 'navbar-dark');
    btn.dataset.bsToggle = "collapse";
    btn.dataset.bsTarget = "#navbarNav"
    btn.type="button";
    btn.setAttribute("aria-controls", "navbarNav");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "Toggle navigation");

    const burger = document.createElement('span');
    burger.classList.add('navbar-toggler-icon');
    btn.appendChild(burger);

    const navbar = document.createElement('div');
    navbar.classList.add('collapse', 'navbar-collapse');
    navbar.setAttribute('id', 'navbarNav');
    navbar.appendChild(navItem(['HOME', 'MENU', 'CONTACT']));

    container.appendChild(logo);
    container.appendChild(btn);
    container.appendChild(navbar);
    nav.appendChild(container);
    return nav;
}

// Create nav items
// Parameter: Array of strings
function navItem(items) {
    const content = document.querySelector('#content');
    let first = 1;
    const ul = document.createElement('ul');
    ul.classList.add('navbar-nav');

    for(const item of items) {
        let nav_item = document.createElement('li');
        nav_item.classList.add('nav-item');

        let nav_link = document.createElement('a');
        nav_link.classList.add('nav-link');

        if(first) {
            nav_link.classList.add('active');
            nav_link.setAttribute('aria-current', 'page');
        }

        nav_link.id = item.toLowerCase() + '-btn';
        nav_link.innerText = item;

        if(item === "HOME") {
            nav_link.addEventListener('click', () => {
                content.textContent = '';
                home();
                footer();
            });
        } else if(item === "MENU") {
            nav_link.addEventListener('click', () => {
                if(nav_link.classList.contains('active')) {
                    return;
                }
                document.querySelector('main').textContent = '';
                document.querySelector('.desc-container').remove();
                menu();
            });
        }

        nav_link.addEventListener("click", (e) => {
            activateButton(nav_link);
        });

        nav_item.appendChild(nav_link);
        ul.appendChild(nav_item);

        first = 0;
    }
    return ul;
}

// Add 'active' class to given element and remove from the rest
// Parameter: Element to add 'active' class (One of the navbar items)
function activateButton(button) {
    const buttons = document.querySelectorAll(".nav-link");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
}

// Create headline for the home page
function main() {
    const element = document.createElement('main');
    const headline = document.createElement('div')
    headline.classList.add('container', 'headline');
    headline.textContent = "Experience Authentic Vietnamese Cuisine at Green Tea House!";
    element.appendChild(headline);
    return element;
}

const description = "Green Tea House Glenelg is a family-owned Vietnamese restaurant located in the heart of Glenelg, South Australia. We offer a varied menu with a focus on traditional Vietnamese cuisine. Our dishes are made with fresh, locally sourced ingredients, and our recipes are based on authentic family recipes. Our welcoming atmosphere and friendly staff make Green Tea House Glenelg the perfect spot for a meal with friends and family. Come on in and join us for a unique dining experience!";

// Creates the about us section
function information() {
    const container = document.createElement('div');
    container.className = "desc-container"
    const title = document.createElement('div');
    title.className = "about-title";
    title.textContent = "About";
    container.appendChild(title);
    const about = document.createElement('div');
    about.classList.add('desc', 'container');
    about.textContent = description;
    container.appendChild(about);

    return container;
}

export default home;