// Get references to the modal and close button
const model = document.getElementById('model');
const closeButton = document.getElementById('close');
const openButton = document.getElementById('open');

// Event listener for opening the modal
openButton.addEventListener('click', () => {
    model.classList.add('show-model');
});

// Event listener for closing the modal
closeButton.addEventListener('click', () => {
    model.classList.remove('show-model');
});

// Event listener to close the modal if the user clicks outside of it
window.addEventListener('click', (e) => {
    if (e.target === model) {
        model.classList.remove('show-model');
    }
});



// const closeBtn = document.getElementById('close');
// const openBtn = document.getElementById('open');
// const model = document.getElementById('model');

// openBtn.addEventListener('click', () => {
//     model.classList.add('show-model');
// });

// closeBtn.addEventListener('click', () => {
//     model.classList.remove('show-model');
// }); 

// window.addEventListener('click', (e) => {
//     if (e.target === model) {
//         model.classList.remove('show-model');
//     }

// });