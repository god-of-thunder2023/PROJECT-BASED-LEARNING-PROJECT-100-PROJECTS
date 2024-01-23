const allLabels = document.querySelectorAll('.form-control label');
allLabels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('');
});

// Get references to the eye icon and the password input
const eye = document.getElementById("eye-icon");
const input = document.querySelector('input[type="password"]');

// Add an event listener to toggle the visibility of the password
eye.addEventListener("click", () => {
    if (input.type === "password") {
        input.type = "text";
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    }
});
