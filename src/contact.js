import facebook_icon from './images/facebook.svg';

// Append generated HTML for all menu items with sub-titles to the main section
function contact() {
    const facebook_link = "https://www.facebook.com/GreenTeaHouseGlenelg";

    const main = document.querySelector('main');
    const container = document.createElement('div');
    container.classList.add('menu', 'container', 'p-5');
    
    const contact_section_title = document.createElement('div');
    contact_section_title.classList.add('text-center', 'menu-title', 'pb-3');
    contact_section_title.innerText = "Contact";
    container.appendChild(contact_section_title);

    const contact_text = ["For bookings or any other enquiries please call us on", "(08) 8294 9484", "OR", "Message us on Facebook"];
    for(let i = 0; i < 4; i++) {
        let contact = document.createElement('div');
        contact.classList.add('text-center', 'pb-3');

        if(i === 1) {
            contact.classList.add('menu-sub-title');
        }

        contact.textContent = contact_text[i];
        container.appendChild(contact);
    }

    const social_icon = document.createElement('a');
    social_icon.classList.add('social-icon', 'text-center');
    social_icon.href = facebook_link;
    social_icon.target = "_blank";
    const social_img = new Image();
    social_img.src = facebook_icon;
    social_img.alt = "Facebook Icon";
    social_icon.appendChild(social_img);
    container.appendChild(social_icon);
    
    main.appendChild(container);
}

export default contact;