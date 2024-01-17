// let arrow = document.getElementById("arrow"); 

// window.addEventListener("scroll", () => {
//     let position = window.scrollY;
//     if (position <= 5) {
//         arrow.classList.toggle('fade-in')
//         arrow.classList.toggle('fade-out')
        
//     }
// });

let arrow = document.getElementById("arrow");

window.addEventListener("scroll", () => {
    let position = window.scrollY;

    if (position <= 5) {
        arrow.classList.add('fade-in');
        arrow.classList.remove('fade-out');
    } else {
        arrow.classList.remove('fade-in');
        arrow.classList.add('fade-out');
    }
});