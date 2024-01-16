// toggle 
const toggle = document.getElementById('toggle');

// navigation
const nav = document.getElementById('nav');

// event listener
toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});