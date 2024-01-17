// Pro23.Simple.Calc\app.js
document.getElementById('btn').addEventListener('click', function () {
    let num1 = document.querySelector('.num1').value;
    let num2 = document.querySelector('.num2').value;
    let result = document.querySelector('.result');
    let operator = document.getElementById('selectOp').value;

    switch (operator) {
        case 'plus':
            result.innerHTML = Number(num1) + Number(num2);
            break;
        case 'min':
            result.innerHTML = Number(num1) - Number(num2);
            break;
        case 'dev':
            result.innerHTML = Number(num1) / Number(num2);
            break;
        case 'times':
            result.innerHTML = Number(num1) * Number(num2);
    }

    
});

document.getElementById('clear').addEventListener('click', function () {
    document.querySelector('.num1').value = '';
    document.querySelector('.num2').value = '';
    document.querySelector('.result').innerHTML = '';
});
