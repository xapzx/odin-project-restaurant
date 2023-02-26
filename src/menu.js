const menu_items = [
    {
        'price': 11.90, 
        'name': 'Cha Gio Ha Noi', 
        'desc': 'Mum\'s special Northern style seafood spring rolls (4pcs)',
    },
    {
        'price': 10.90,
        'name': 'Cha Gio Rau (VG:CG)',
        'desc': 'Vegetarian spring rolls (3pcs)',
    },
    {
        'price': 10.90,
        'name': 'Cha Gio Saigon',
        'desc': 'Southern style pork spring rolls (3pcs)',
    },
    {
        'price': 10.90,
        'name': 'Goi Cuon (VGO)',
        'desc': 'Rice paper cold rolls with chicken and/or prawns or vegetable and tofu',
    },
    {
        'price': 14.90,
        'name': 'Banh Khot (VGO)',
        'desc': 'Traditional mini rice pancakes with shrimp and mince pork',
    },
    {
        'price': 5.00,
        'name': 'Banh Phong Tom',
        'desc': 'Prawn crackers served with home made satay sauce',
    },
];

const menu_items_html = ['span', 'div', 'div'];
const menu_items_class = ['menu-item-price', 'menu-item-name', 'menu-item-desc'];

// Generate HTML for each menu item
// Rows of 3 items
function menu() {
    const container = document.createElement('div');
    container.classList.add('menu', 'container', 'p-3');

    let count = 0;
    for(let row_i = 0; row_i < menu_items.length/3; row_i++) {
        const row = document.createElement('div');
        row.className = 'row';

        for(let col_i = 0; col_i < 3; col_i++) {
            const col = document.createElement('div');
            col.classList.add('col-sm', 'pb-3');

            let menu_i = 0;
            for(const menu in menu_items[count]) {
                const menu_element = document.createElement(menu_items_html[menu_i]);
                menu_element.className = menu_items_class[menu_i];
                menu_element.innerText = menu_items[count][menu];
                col.appendChild(menu_element);
                menu_i++;
            }
            row.appendChild(col);
            count++;
        }
        container.appendChild(row);
    }
    return container;
}

export default menu;