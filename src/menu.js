// Array of entree menu item objects
const menu_items_entree = [
    {
        'price': 11.90, 
        'name': 'Cha Gio Ha Noi (CG)', 
        'desc': 'Mum\'s special northern style seafood spring rolls (4 pcs)',
    },
    {
        'price': 10.90,
        'name': 'Cha Gio Rau (VG, CG)',
        'desc': 'Vegetarian spring rolls (3 pcs)',
    },
    {
        'price': 10.90,
        'name': 'Cha Gio Saigon (CG)',
        'desc': 'Southern style pork spring rolls (3 pcs)',
    },
    {
        'price': 10.90,
        'name': 'Goi Cuon (VGO)',
        'desc': 'Rice paper cold rolls with chicken and/or prawns or vegetable and tofu (2 pcs)',
    },
    {
        'price': 14.90,
        'name': 'Banh Khot (VGO)',
        'desc': 'Traditional mini rice pancakes with shrimp and minced pork',
    },
    {
        'price': 5.00,
        'name': 'Banh Phong Tom',
        'desc': 'Prawn crackers served with home made satay sauce',
    },
    {
        'price': 13.90,
        'name': 'Sup Bap Ga (VGO)',
        'desc': 'Chicken/tofu and sweet corn soup',
    },
    {
        'price': 15.90,
        'name': 'Sup Do Bien Dau Hu',
        'desc': 'Combination seafood and bean curd',
    },
    {
        'price': 13.90,
        'name': 'Canh Ga',
        'desc': 'Sticky chicken wings (2 pcs)',
    },
    {
        'price': 13.90,
        'name': 'Nem Nuong Xao',
        'desc': 'Minced pork belly meatballs and sichuan sauce (3 pcs)',
    },
    {
        'price': 14.90,
        'name': 'Bo La Lot',
        'desc': 'Grilled minced beef wrapped in wild betel leaf (5 pcs)',
    },
    {
        'price': 14.90,
        'name': 'Chim Cut Nuong',
        'desc': 'Vietnamese BBQ quail marinated with spicy herbs and lemongrass (1 pcs)',
    },
    {
        'price': 11.90,
        'name': 'Muc Rang Muoi (VGO, CG)',
        'desc': 'Small salt and pepper squid OR tofu (Large +$6)',
    },
    // {
    //     'price': 13.90,
    //     'name': 'Baby Curry Puffs (VG, CG)',
    //     'desc': 'Mini pie puffs with diced potatoes and carrots (3 pcs)',
    // },
    // {
    //     'price': 13.90,
    //     'name': 'Indonesian Chicken Satay',
    //     'desc': 'Grilled seasoned chicken satay skewers topped with home made satay sauce (3 pcs)',
    // },
    // {
    //     'price': 13.90,
    //     'name': 'Thai Pandan Chicken',
    //     'desc': 'Grilled marinated chicken in herbs and lemongrass wrapped in pandan leaves',
    // },
];

// Array of mains menu item objects
const menu_items_mains = [
    {
        'price': 22.90,
        'name': 'Pho Ha Noi',
        'desc': 'Traditional Vietnamese beef rice noodle soup with sliced rare beef, brisket and meatballs OR chicken breast OR vegetable and tofu',
    },
    {
        'price': 22.90,
        'name': 'Banh Xeo (VGO)',
        'desc': 'Crispy savoury Vietnamese pancake with shrimp, pork belly, bean sprouts, mint, salad and a dipping sauce',
    },
    {
        'price': 25.90,
        'name': 'Chao Tom',
        'desc': 'Grilled mince sugarcane king prawns with rice vermicelli, Vietnamese herbs, salad and dipping sauce (roll your own cold rolls)',
    },
    {
        'price': 25.90,
        'name': 'Nem Nuong',
        'desc': 'Grilled pork belly meatballs on skewers with rice vermicelli, Vietnamese herbs, salad and dipping sauce (roll your own cold rolls)',
    },
    {
        'price': 22.90,
        'name': 'Hu Tieu Xao (VGO)',
        'desc': 'Fresh flat rice noodles stir fried with vegetables and chicken OR vegetables and tofu OR seafood (+$3)',
    },
    {
        'price': 22.90,
        'name': 'Xao Xa Ot (VGO)',
        'desc': 'Lemongrass chilli stir fried with vegetables and tofu OR chicken OR beef OR seafood (+$3)',
    },
    {
        'price': 22.90,
        'name': 'Xao Hat Dieu',
        'desc': 'Roasted cashews stired fried with vegetables and tofu OR chicken OR beef OR seafood (+$3)',
    },
    {
        'price': 23.90,
        'name': 'Ca Ri Ga',
        'desc': 'Mum\'s delicious home made Vietnamese coconut curry with turmeric chicken, potatoes and carrots',
    },
    {
        'price': 24.90,
        'name': 'Bo Luc Lac',
        'desc': 'Vietnamese diced "shaking" beef stir fried with capsisum and topped with crushed roasted peanuts and cracked pepper',
    },
    {
        'price': 27.90,
        'name': 'Thit Kho Trung',
        'desc': 'Slow cooked pork belly and egg cooked in a traditional Vietnamese clay pot',
    },
    {
        'price': 27.90,
        'name': 'Ca Kho To',
        'desc': 'Bone in fish steaks slow cooked in a traditional Vietnamese clay pot in caramelized pork fat sauce',
    },
    {
        'price': 27.90,
        'name': 'Tom Dia Nong',
        'desc': 'King prawns and vegetables stir fried in a creamy garlic sauce served on a sizzling hot plate',
    },
    {
        'price': 24.90,
        'name': 'Dia Nong',
        'desc': 'Mongolian sizzling hot plate served with vegetables and chicken OR beef',
    },
    {
        'price': 39.90,
        'name': 'Lau De',
        'desc': 'Special braised five spice goat with taro in a hot pot with vegetables',
    },
    {
        'price': 29.90,
        'name': 'De Xao Lan',
        'desc': 'Marinated goat meat stir-fried with lemongrass, galangal, tamarind and chilli. (CAUTION: This dish is traditionally chewy)',
    },
    {
        'price': 25.90,
        'name': 'Canh Chua (VGO)',
        'desc': 'Traditional Vietnamese sweet and sour pineapple, tomato and bean sprout soup with chicken OR vegetables and tofu OR fish (+$3) OR king prawns (+$3) OR seafood (+$3)',
    },
];

// Rice menu item objects
const menu_items_rice  = [
    {
        'price': 22.90,
        'name': 'Com Ga Chien Gion',
        'desc': 'Crispy marinated chicken served with jasmine rice, cucumber, pickle and vegetables in a homemade dressing',
    },
    {
        'price': 22.90,
        'name': 'Com Suon',
        'desc': 'Marinated pork chops served with jasmine rice, cucumber, pickle and vegetable in a homemade dressing',
    },
    {
        'price': 22.90,
        'name': 'Com Heo Quay',
        'desc': 'Mum\'s Vietnamese roast pork served with jasmine rice, cucumber, pickle and vegetables in a homemade dressing',
    },
    {
        'price': 23.90,
        'name': 'Com Dac Biet',
        'desc': 'Pork chops and roast crackling with a fried egg served with jasmine rice, cucumber, pickle and vegetables in a homemade dressing',
    },
    {
        'price': 22.90,
        'name': 'Com Chien (VGO)',
        'desc': 'Special Vietnamese fried rice with chicken, shrimp and holy basil OR vegetables and tofu',
    },
    {
        'price': 27.90,
        'name': 'Com Tay Cam',
        'desc': 'Traditional Vietnamese rice clay pot with Chinese sausage, chicken, mushroom, a fried egg and rice',
    },
];

// Noodle salad bowls
const menu_items_noodle = [
    {
        'price': 21.90,
        'name': 'Bun Do Chay (VGO)',
        'desc': 'Stir fried vegetables and tofu served with vermicelli noodles, mint, cucumber, salad, crushed roasted peanuts and a home made dressing',
    },
    {
        'price': 21.90,
        'name': 'Bun Thit Xao',
        'desc': 'Stir fried beef OR chicken served with vermicelli noodles, mint, cucumber, salad, crushed roasted peanuts and a home made dressing',
    },
    {
        'price': 21.90,
        'name': 'Bun Cha Gio (VGO, CG)',
        'desc': 'Pork OR Vegetable spring rolls served with vermicelli noodles, mint, cucumber, salad, crushed roasted peanuts and a home made dressing',
    },
    {
        'price': 22.90,
        'name': 'Bun Nem Nuong',
        'desc': 'Grilled minced pork belly meatball served with vermicelli noodles, mint, cucumber, salad, crushed roasted peanuts and a home made dressing',
    },
    {
        'price': 22.90,
        'name': 'Bun Heo Quay',
        'desc': 'Mum\'s Vietnamese roast pork served with vermicelli noodles, mint, cucumber, salad, crushed roasted peanuts and a home made dressing',
    },
    {
        'price': 22.90,
        'name': 'Bun Bo La Lot',
        'desc': 'Grilled minced beef wrapped in wild betel leaf served with vermicelli noodles, mint, cucumber, salad, crushed roasted peanuts and a home made dressing',
    },
    {
        'price': 22.90,
        'name': 'Bun Chao Tom',
        'desc': 'Grilled minced sugercane king prawns served with vermicelli noodles, mint, cucumber, salad, crushed roasted peanuts and a home made dressing',
    },
];

// Array of salad menu item objects
const menu_items_salads = [
    {
        'price': 23.90,
        'name': 'Goi Tom Ga',
        'desc': 'Prawn and chicken salad tossed in Vietnamese herbs topped with roasted crushed nuts',
    },
    {
        'price': 23.90,
        'name': 'Bo Tai Chanh',
        'desc': 'Rare beef salad tossed in Vietnamese herbs and chilli topped with crushed nuts',
    },
    {
        'price': 25.90,
        'name': 'Goi Do Bien',
        'desc': 'Prawn, squid and scallop salad tossed in glass noodles and Vietnamese herbs topped with roasted crushed nuts',
    },
];

// Array of favourite menu item objects
const menu_items_favourites = [
    {
        'price': 13.90,
        'name': 'Baby Curry Puffs (VG, CG)',
        'desc': 'Mini pie puffs with diced potatoes and carrots (3 pcs)',
    },
    {
        'price': 13.90,
        'name': 'Indonesian Chicken Satay Skewers',
        'desc': 'Grilled seasoned chicken skewers topped with homemade peanut satay sauce (3 pcs)',
    },
    {
        'price': 13.90,
        'name': 'Thai Pandan Chicken',
        'desc': 'Grilled marinated chicken in herbs and lemongrass wrapped in fragrant pandan leaves',
    },
    {
        'price': 22.90,
        'name': 'Laksa (CG)',
        'desc': 'Malaysian sweet and spicy soup with beef OR chicken OR vegetables and tofu OR seafood (+$2)',
    },
    {
        'price': 22.90,
        'name': 'Mi Thai (VGO)',
        'desc': 'Pad Thai noodles with beef OR chicken OR vegetables and tofu OR seafood (+$3) OR chicken and prawns (+$3)',
    },
    {
        'price': 22.90,
        'name': 'Singapore Noodles (VGO)',
        'desc': 'Stir fried curried rice vermicelli noodles with beef OR chicken OR vegetables and tofu OR seafood (+$3) OR chicken and prawns (+$3)',
    },
    {
        'price': 22.90,
        'name': 'Mi Hoanh Thanh (CG)',
        'desc': 'Chinese pork wonton dumpling soup with egg noodles and bok choy',
    },
];

// Array of banquet object
const menu_items_banquet = [
    {
        'price': 65.00,
        'name': 'Tea House Banquet',
        'desc': 'Leave it to us to showcase our menu with dishes selected for you by our Chef (Price is PER PERSON, min 2 people)',
    },
];

// Dessert menu items
const menu_items_sweets = [
    {
        'price': 10.90,
        'name': 'Xoi Nep Den (VG)',
        'desc': 'Black sticky rice pudding served warm with coconut milk and toasted peanuts',
    },
    {
        'price': 10.90,
        'name': 'Ca Rem Chien (CG)',
        'desc': 'Fried ice-cream with toasted peanuts served with coconut milk OR caramel sauce',
    },
    {
        'price': 10.90,
        'name': 'Chuoi Chien (CG)',
        'desc': 'Crispy banana fritter served with vanilla ice-cream and drizzled in honey',
    },
    {
        'price': 5.00,
        'name': 'Ca Rem Dua',
        'desc': 'Coconut ice-cream topped with toasted peanuts and coconut flakes (1 scoop), (3 scoops +$5.90)',
    },
    {
        'price': 5.00,
        'name': 'Ca Rem Tra Xanh',
        'desc': 'Refreshing green tea ice-cream topped with toasted peanuts (1 scoop), (3 scoops +$5.90)',
    },
    {
        'price': 10.90,
        'name': 'Green Tea Affogato',
        'desc': 'Tea served with green tea ice-cream',
    },
    {
        'price': 10.90,
        'name': 'Coffee Affogato',
        'desc': 'Espresso coffee served with vanilla ice-cream (liqueur +$5)',
    },
];

// Extra menu items
const menu_items_extras = [
    {
        'price': 5.00,
        'name': 'Steamed Jasmine Rice / Rice Vermicelli Noodles',
        'desc': 'Small, Medium (+$1), Large (+$2)',
    },
    {
        'price': 12.00,
        'name': 'Stir-fried Garlic Greens / Steamed Greens',
        'desc': '',
    },
    {
        'price': 5.00,
        'name': 'Steamed Chinese Buns / Deep Fried Chinese Buns',
        'desc': '',
    },
    {
        'price': 5.00,
        'name': 'Extra Tofu OR Vegetables OR Beef OR Chicken',
        'desc': '',
    },
    {
        'price': 2.00,
        'name': 'Prawn',
        'desc': 'Price is for 1 prawn',
    },
    {
        'price': 0.50,
        'name': 'Fresh Chilli',
        'desc': '',
    },
    {
        'price': 3,
        'name': 'Peanut Satay Sauce',
        'desc': '',
    },
    {
        'price': 0.50,
        'name': 'Take Away Containers',
        'desc': 'Each container',
    },
];

const menu_items_html = ['span', 'div', 'div'];
const menu_items_class = ['menu-item-price', 'menu-item-name', 'menu-item-desc'];
const diet = ["CG - Contains Gluten", "VGO - Vegan Option Available on Request", "VG - Vegan"];
const menu_items = [
    { title: "Khai Vi/Entree", items: menu_items_entree, setNum: true },
    { title: "Mon An Chinh/Mains", items: menu_items_mains, setNum: true },
    { title: "Com Dia/Rice Dishes", items: menu_items_rice, setNum: true },
    { title: "Bun/Noodle Salad Bowls", items: menu_items_noodle, setNum: true },
    { title: "Goi/Salads", items: menu_items_salads, setNum: true },
    { title: "Favourites", items: menu_items_favourites, setNum: true },
    { title: "Banquet", items: menu_items_banquet, setNum: false },
    { title: "Them/Extras", items: menu_items_extras, setNum: false },
    { title: "Trang Mieng/Something Sweet", items: menu_items_sweets, setNum: false },
];

// Append generated HTML for all menu items with sub-titles to the main section
function menu() {
    item_id = 1;
    const main = document.querySelector('main');
    const container = document.createElement('div');
    container.classList.add('menu', 'container', 'p-3');
    
    const menu_section_title = document.createElement('div');
    menu_section_title.classList.add('text-center', 'menu-title', 'fw-bold');
    menu_section_title.innerText = "Menu";
    container.appendChild(menu_section_title);

    const dietary_container = document.createElement('div');
    dietary_container.classList.add('text-center', 'pb-3');
    
    for(const item of diet) {
        let dietary = document.createElement('div');
        dietary.innerText = item;
        dietary_container.appendChild(dietary);
        container.appendChild(dietary_container);
    }

    for(const item of menu_items) {
        container.appendChild(generateMenu(item.items, item.title, item.setNum));
    }
    
    main.appendChild(container);
}

// Generate HTML for menu items section
// Rows of 3 items
// Parameters: Array of menu item objects, title for menu section
// Returns HTML for a section of menu items in rows of 3 items
let item_id = 1;
function generateMenu(menu_list, sub_menu, numbered = true) {
    const container = document.createElement('div');
    const menu_section_title = document.createElement('div');
    menu_section_title.classList.add('text-center', 'menu-sub-title', 'pb-2', 'pt-2', 'fw-bold');
    menu_section_title.innerText = sub_menu;
    container.appendChild(menu_section_title);

    let count = 0;
    for(let row_i = 0; row_i < menu_list.length/3; row_i++) {
        const row = document.createElement('div');
        row.className = 'row';

        for(let col_i = 0; col_i < 3; col_i++) {
            const col = document.createElement('div');
            col.classList.add('col-sm', 'pb-3');

            let menu_i = 0;
            for(const menu in menu_list[count]) {
                const menu_element = document.createElement(menu_items_html[menu_i]);
                menu_element.className = menu_items_class[menu_i];

                if(menu === 'price') {
                    menu_element.innerText = "$" + menu_list[count][menu];
                    menu_element.classList.add('fw-bold', 'ps-2', 'float-end');
                } else if(menu === "name") {
                    menu_element.classList.add('fw-bold');
                    if(numbered) {
                        menu_element.innerText = "#" + item_id + " " + menu_list[count][menu];
                        item_id++;
                    } else {
                        menu_element.innerText = menu_list[count][menu];
                    }
                    
                } else {
                    menu_element.innerText = menu_list[count][menu];
                }
                
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