let images = document.querySelectorAll('img');
let wrapper = document.getElementById('wrapper');
let imageWrapper = document.getElementById('full-image');
let close = document.querySelector('span');

images.forEach((img, index) => {
    img.addEventListener('click', () => openModal(img.getAttribute('src')));
});

function openModal(pic) {
    wrapper.style.display = 'flex';
    imageWrapper.src = pic;
};

close.addEventListener('click', () => {
    wrapper.style.display = 'none';
});