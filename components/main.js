// Import navigation functionality
import { initializeNav } from './js/nav.js';
import { initializeAbout } from './js/about.js';
import { initializeProjects } from './js/projects.js';
import { initializeSkills } from './js/skills.js';
import { initializeContact } from './js/contact.js';
import { initializeFooter } from './js/footer.js';

// Load the navigation
fetch('view/nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav-placeholder').innerHTML = data;
        initializeNav();
    })
    .catch(error => console.error('Error loading navigation:', error));

// Load the about section
fetch('view/about.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('about-placeholder').innerHTML = data;
        initializeAbout();
    })
    .catch(error => console.error('Error loading about section:', error));

// Load the projects section
fetch('view/Projects.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('projects-placeholder').innerHTML = data;
        initializeProjects();
    })
    .catch(error => console.error('Error loading projects section:', error));

// Load the skills section
fetch('view/skills.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('skills-placeholder').innerHTML = data;
        initializeSkills();
    })
    .catch(error => console.error('Error loading skills section:', error));

// Load the contact section
fetch('view/contact.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('contact-placeholder').innerHTML = data;
        initializeContact();
    })
    .catch(error => console.error('Error loading contact section:', error));

// Load the footer
fetch('view/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
        initializeFooter();
    })
    .catch(error => console.error('Error loading footer:', error));
