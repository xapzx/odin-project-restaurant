// Creates social icon
// Parameters: [image file, webpage link, alternative text, classes, true/false (true to open in new tab)]
function createSocialIcon(image, href, alt, classes=[], new_tab=true) {
    const icon = document.createElement('a');
    icon.href = href;
    const img = new Image();
    img.src = image;
    img.alt = alt;

    for(const a_class of classes) {
        icon.classList.add(a_class);
    }

    if(new_tab) {
        icon.target = "_blank";
    }

    icon.appendChild(img);
    return icon;
}

export default createSocialIcon;