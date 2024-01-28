const containerTwo = document.querySelector('.content-container-2');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    containerTwo.classList.toggle('toggle');
    // Change button text dynamically based on the presence of 'toggle' class
    btn.textContent = containerTwo.classList.contains('toggle') ? 'Read Less' : 'Read More';
});