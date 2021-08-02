//Query the DOM
const bioButton = document.querySelector("#bio-button");
const workExperienceButton = document.querySelector("#work-exp-button");
const educationButton = document.querySelector("#education-button");
const contactButton = document.querySelector("#contact-button");
const bio = document.querySelector(".bio");
const workExperience = document.querySelector(".work-experience");
const education = document.querySelector(".education");
const contact = document.querySelector(".contact");

//Click events
let selector = 0;
navigateContent(selector);

bioButton.onclick = () => {selector = 0; navigateContent(selector);}


workExperienceButton.onclick = () => {selector = 1; navigateContent(selector);}


educationButton.onclick = () => {selector = 2; navigateContent(selector);}


contactButton.onclick = () => {selector = 3; navigateContent(selector);}



// This function will be hoisted to top of script
// I think there should be a cleaner way of doing this
function navigateContent(selector){
    switch (selector) {
        case 0:
            bio.setAttribute('style', 'display:block;');
            workExperience.setAttribute('style','display:none;');
            education.setAttribute('style','display:none;');
            contact.setAttribute('style','display:none;');

            bioButton.setAttribute('style','font-weight:bold;');
            workExperienceButton.setAttribute('style','font-weight:lighter');
            educationButton.setAttribute('style','font-weight:lighter');
            contactButton.setAttribute('style','font-weight:lighter');
            break;

        case 1:
            bio.setAttribute('style', 'display:none;');
            workExperience.setAttribute('style','display:block;');
            education.setAttribute('style','display:none;');
            contact.setAttribute('style','display:none;');

            bioButton.setAttribute('style','font-weight:lighter;');
            workExperienceButton.setAttribute('style','font-weight:bold');
            educationButton.setAttribute('style','font-weight:lighter');
            contactButton.setAttribute('style','font-weight:lighter');
            break;

        case 2:
            bio.setAttribute('style', 'display:none;');
            workExperience.setAttribute('style','display:none;');
            education.setAttribute('style','display:block;');
            contact.setAttribute('style','display:none;');

            bioButton.setAttribute('style','font-weight:lighter;');
            workExperienceButton.setAttribute('style','font-weight:lighter');
            educationButton.setAttribute('style','font-weight:bold');
            contactButton.setAttribute('style','font-weight:lighter');
            break;

        case 3:
            bio.setAttribute('style', 'display:none;');
            workExperience.setAttribute('style','display:none;');
            education.setAttribute('style','display:none;');
            contact.setAttribute('style','display:block;');

            bioButton.setAttribute('style','font-weight:lighter;');
            workExperienceButton.setAttribute('style','font-weight:lighter');
            educationButton.setAttribute('style','font-weight:lighter');
            contactButton.setAttribute('style','font-weight:bold');
            break;

    }
}
