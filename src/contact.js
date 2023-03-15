import facebook_icon from './images/facebook.svg';
import createSocialIcon from './helper.js';

// Append generated HTML for all menu items with sub-titles to the main section
function contact() {
    const facebook_link = "https://www.facebook.com/GreenTeaHouseGlenelg";

    const main = document.querySelector('main');
    const container = document.createElement('div');
    container.classList.add('menu', 'container', 'p-4');
    
    const contact_section_title = document.createElement('div');
    contact_section_title.classList.add('text-center', 'menu-title', 'pb-3');
    contact_section_title.innerText = "Contact";
    container.appendChild(contact_section_title);

    const contact_text = ["For bookings or any other enquiries please call us on", "(08) 8294 9484", "OR", "Message us on Facebook"];
    for(let i = 0; i < contact_text.length; i++) {
        let contact = document.createElement('div');
        contact.classList.add('text-center', 'pb-3');

        if(i === 1) {
            contact.classList.add('menu-sub-title');
        }

        contact.textContent = contact_text[i];
        container.appendChild(contact);
    }

    const social_icon = createSocialIcon(facebook_icon, facebook_link, "Facebook Icon", ['social-icon', 'text-center']);
    container.appendChild(social_icon);
    main.appendChild(container);
}

export default contact;