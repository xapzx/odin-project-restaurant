import github_icon from './images/github.svg';
import facebook_icon from './images/facebook.svg';

// Generate the footer HTML
function footer() {
    const facebook_link = "https://www.facebook.com/GreenTeaHouseGlenelg";
    const github_link = "https://github.com/xapzx";
    const footer = document.createElement('footer');
    const container = document.createElement('div');
    container.classList.add('footer-info', 'container');

    const row = document.createElement('div');
    row.classList.add('row');

    // Social
    let col = document.createElement('div');
    col.classList.add('col-sm', 'pb-3', 'container');
    const social = document.createElement('div');
    social.classList.add('row', 'social');
    const social_title = document.createElement('h6');
    social_title.innerText = 'Social:';
    const social_icon = document.createElement('a');
    social_icon.classList.add('social-icon');
    social_icon.href = facebook_link;
    social_icon.target = "_blank";
    const social_img = new Image();
    social_img.src = facebook_icon;
    social_img.alt = "Facebook Icon";
    social_icon.appendChild(social_img);
    social.appendChild(social_title);
    social.appendChild(social_icon);
    col.appendChild(social);

    // Contact
    const contact = document.createElement('div');
    contact.classList.add('row');
    const contact_title = document.createElement('h6');
    contact_title.innerText = "Contact:";
    contact.appendChild(contact_title);
    const phone = document.createElement('p');
    phone.innerHTML = "(08) 8294 9484";
    contact.appendChild(phone);
    contact.classList.add('row');
    col.appendChild(contact);
    row.appendChild(col);

    // Address
    col = document.createElement('div');
    col.classList.add('col-sm', 'pb-3');

    const address_obj = {"Address:": "h6", "22 Jetty Road": "p", "Glenelg SA 5045": "p"};
    for(const addr in address_obj) {
        let address = document.createElement(address_obj[addr]);
        address.innerText = addr;
        col.appendChild(address);
    }
    row.appendChild(col);

    // Business hours
    col = document.createElement('div');
    col.classList.add('col-sm', 'pb-3');
    let hours = document.createElement('h6');
    hours.innerText = "Business Hours:";
    col.appendChild(hours);
    
    hours = {"Monday:": "Closed", "Tues - Sun:": "12:00 - 3:00 PM", "": "5:00 - 9:00 PM"};
    for(const time in hours) {
        let business_row = document.createElement('div');
        business_row.classList.add('row')
        let business_col = document.createElement('div');
        business_col.className = "col";
        business_col.innerText = time;
        business_row.appendChild(business_col);
        business_col = document.createElement('div');
        business_col.className = "col";
        business_col.innerText = hours[time];
        business_row.appendChild(business_col);
        col.appendChild(business_row);
    }
    row.appendChild(col);

    // Developer Credit
    const developed_by = document.createElement('p');
    developed_by.classList.add('text-center');
    developed_by.innerText = "Developed by Andy Phan ";
    const github = document.createElement('a');
    github.href = github_link;
    const img = new Image();
    img.src = github_icon;
    img.alt = "Github Icon";
    github.appendChild(img);
    developed_by.appendChild(github);

    container.appendChild(row);
    footer.appendChild(container);
    footer.appendChild(developed_by);
    return footer;
}

export default footer;