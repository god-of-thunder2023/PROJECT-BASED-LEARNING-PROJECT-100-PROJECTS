document.addEventListener('DOMContentLoaded', function () {
    const copyText = document.querySelector('.copyTxt');
    const moverBtn = document.querySelector('.moverBtn');
    const copyBtn = document.querySelector('.copyBtn');
    const finalTxt = document.querySelector('textarea[name="finalTxt"]');
    const output = document.querySelector('.output');

    copyBtn.addEventListener('click', () => {
        let temp = copyText.value;
        copyToClipBoard(temp);
    });

    copyText.addEventListener('click', function() {
        this.select();
    });

    moverBtn.addEventListener('click', () => {
        finalTxt.value = copyText.value;
        output.innerHTML = `<h3>Moved</h3>`;
        output.classList.add('added');
        setTimeout(() => {
            output.classList.remove('added');
            output.textContent = '';
        }, 2000);
    });

    function copyToClipBoard(str) {
        const textArea = document.createElement('textarea');
        textArea.value = str;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        output.innerHTML = `<h3>Copied</h3>`;
        output.classList.add('added');
        setTimeout(() => {
            output.classList.remove('added');
            output.textContent = '';
        }, 2000);
    }
});


