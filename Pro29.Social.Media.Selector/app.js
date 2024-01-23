let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let list = document.getElementById("list");
let arrowIcon = document.getElementById("arrowIcon");
let options = document.getElementsByClassName("options"); // Change "option" to "options"

selectField.addEventListener("click", () => {
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
});

for (option of options) {
    option.onclick = function () {
        selectText.innerHTML = this.querySelector("p").textContent; // Updated to select the text within the <p> element
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    }
}
