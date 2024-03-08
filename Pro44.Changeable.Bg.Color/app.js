const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const number = btn.value; // Declare number as a local variable using const
        changeBackground(number);
    });
});

function changeBackground(number) {
    const body = document.body; // Access the body element using document.body
    body.className = "";
    switch (number) {
        case 'purple':
            body.classList.add('purple');
            break;
        case 'blue':
            body.classList.add('blue');
            break;
        case 'red':
            body.classList.add('red');
            break;
        case 'green':
            body.classList.add('green');
            break;
        case 'yellow':
            body.classList.add('yellow');
            break;
        case 'teal':
            body.classList.add('teal');
            break;
        default:
            break;
    }
}
