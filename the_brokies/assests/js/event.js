// Select DOM elements
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const body = document.querySelector('body');

// Create and append the backdrop element only if it doesn't exist
let backdrop = document.querySelector('.menu-backdrop');
if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.classList.add('menu-backdrop');
    body.appendChild(backdrop);
}

// Toggle navigation menu and backdrop visibility
burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    backdrop.classList.toggle('display'); // Show or hide the backdrop
    body.classList.toggle('fixed-position'); // Toggle body scrolling
    burger.classList.toggle('toggle'); // Animate burger icon
});

// Hide menu and backdrop when backdrop is clicked
backdrop.addEventListener('click', () => {
    navLinks.classList.remove('nav-active');
    backdrop.classList.remove('display');
    body.classList.remove('fixed-position');
    burger.classList.remove('toggle');
});

// Close menu when any nav link is clicked
const navItems = document.querySelectorAll('.nav-links li');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
        backdrop.classList.remove('display');
        body.classList.remove('fixed-position');
        burger.classList.remove('toggle');
    });
});

// Add box shadow to navbar when scrolling down
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('nav-shadow');
    } else {
        navbar.classList.remove('nav-shadow');
    }
});


