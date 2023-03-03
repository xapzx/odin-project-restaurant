// Create Home page
// Appends the Navbar and Main section to the HTML file
function home() {
    const content = document.querySelector('#content');
    content.appendChild(navbar());
    const element = document.createElement('main');
    content.appendChild(element);
 }

// Create nav bar
// Returns JS generated Navbar HTML
function navbar() {
    const nav = document.createElement('nav');
    nav.classList.add('navbar', 'navbar-expand-lg');

    const container = document.createElement('div');
    container.classList.add('container-fluid');

    const logo = document.createElement('a');
    logo.classList.add('navbar-brand');
    logo.href = '#';
    logo.innerText = "GREEN TEA HOUSE";

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
    let first = 1;
    const ul = document.createElement('ul');
    ul.classList.add('navbar-nav');

    for(const item of items) {
        let nav_item = document.createElement('li');
        nav_item.classList.add('nav-item');

        let nav_link = document.createElement('a');
        nav_link.classList.add('nav-link');

        if(flag) {
            nav_link.classList.add('active');
            nav_link.setAttribute('aria-current', 'page');
        }

        nav_link.id = item.toLowerCase() + '-btn';
        nav_link.href = "#";
        nav_link.innerText = item;

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

export default home;