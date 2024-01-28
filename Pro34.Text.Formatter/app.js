// const inputField = document.getElementById('input-field');
// const outputField = document.getElementById('output-field');
// const btns = document.querySelectorAll('button');

// inputField.addEventListener('keyup', () => {
//     outputField.innerText = inputField.value;
// }); 

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         if (btn.classList.contains('uppercase')) {
//             outputField.innerText = inputField.value.toUpperCase();
//         } else if (btn.classList.contains('lowercase')) {
//             outputField.innerText = inputField.value.toLowerCase();
//         } else if (btn.classList.contains('capitalize')) {
//             // Capitalize the first letter of each word in the inputField value
//             outputField.innerText = inputField.value.replace(/\b\w/g, char => char.toUpperCase());
//         } else if (btn.classList.contains('bold')) {
//             outputField.style.fontWeight = '900';
//         } else if (btn.classList.contains('italic')) {
//             outputField.style.fontStyle = 'italic';
//         } else if (btn.classList.contains('underline')) {
//             outputField.style.textDecoration = 'underline';
//         } 
//     });

// });

const inputField = document.getElementById('input-field');
const outputField = document.getElementById('output-field');
const btns = document.querySelectorAll('button');

inputField.addEventListener('keyup', () => {
    outputField.innerText = inputField.value;
}); 

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('uppercase')) {
            toggleStyle('text-transform', 'uppercase');
        } else if (btn.classList.contains('lowercase')) {
            toggleStyle('text-transform', 'lowercase');
        } else if (btn.classList.contains('capitalize')) {
            toggleStyle('text-transform', 'capitalize');
        } else if (btn.classList.contains('bold')) {
            toggleStyle('font-weight', 'bold');
        } else if (btn.classList.contains('italic')) {
            toggleStyle('font-style', 'italic');
        } else if (btn.classList.contains('underline')) {
            toggleStyle('text-decoration', 'underline');
        } 
    });
});

function toggleStyle(styleName, value) {
    const currentStyle = outputField.style[styleName];
    if (currentStyle === value) {
        outputField.style[styleName] = '';  // If the style is already set, remove it
    } else {
        outputField.style[styleName] = value;  // Otherwise, set the style
    }
}