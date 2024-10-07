// Toggle Menu for Mobile
const toggleMenu = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggleMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Sticky Navbar
window.addEventListener('scroll', () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle('sticky', window.scrollY > 0);
});

// Active Link Highlighting on Scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links li');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset > sectionTop - 50) {
            currentSection = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.querySelector('a').getAttribute('href').includes(currentSection)) {
            item.classList.add('active');
        }
    });
});

// Smooth Scroll on Nav Click
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove('show'); // Close menu after clicking a link
    });
});

// Initialize Active Section on Page Load
document.addEventListener('DOMContentLoaded', () => {
    window.dispatchEvent(new Event('scroll')); // Trigger scroll event to highlight the active section
});

// Back to Top Button Show/Hide on Scroll
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

// Smooth Scroll for Back to Top Button
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Debounce Scrolling for Performance Optimization
let isScrolling = false;

window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            handleScroll(); // Call scroll-related functions
            isScrolling = false;
        });
        isScrolling = true;
    }
});

// Handle Scroll Events (Sticky Navbar, Active Section Highlight, Back to Top Button)
function handleScroll() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle('sticky', window.scrollY > 0);

    const backToTopBtn = document.getElementById('backToTop');
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }

    let currentSection = '';
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset > sectionTop - 50) {
            currentSection = section.getAttribute('id');
        }
    });

    const navItems = document.querySelectorAll('.nav-links li');
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.querySelector('a').getAttribute('href').includes(currentSection)) {
            item.classList.add('active');
        }
    });
}

// Get the button
const backToTopButton = document.getElementById('backToTop');

// Show the button when scrolling down
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.classList.add('show'); // Add the 'show' class
    } else {
        backToTopButton.classList.remove('show'); // Remove the 'show' class
    }
};

// Scroll to the top when the button is clicked
backToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll
    });
};

