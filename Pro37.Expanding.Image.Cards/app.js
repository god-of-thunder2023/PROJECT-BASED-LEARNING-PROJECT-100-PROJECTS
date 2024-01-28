const slides = document.querySelectorAll('.slide');
const slideContainer = document.querySelector('.slide-container');

slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        removeCurrentActives();
        slide.classList.add('active');
    });
});



function removeCurrentActives() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
}

// slideContainer.addEventListener('mouseleave', () => {
//     removeCurrentActives();
// });

// function removeCurrentActives() {
//     slides.forEach((slide) => {
//         slide.classList.remove('active');
//     });
// }