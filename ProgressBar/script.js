
const progress = document.querySelector(".progress-done")
const input = document.querySelector(".input")
const maxInput = document.querySelector(".maxInput")

let finalValue = 0;
let max = 0;

function ChangeWidth() {
    progress.style.width = `${(finalValue / max) * 100}%`;
    progress.innerText = `${Math.ceil((finalValue / max) * 100)}%`;
}
input.addEventListener("keyup", function () {
    finalValue = parseInt(input.value, 10)
    ChangeWidth()
})
input.addEventListener("keyup", function () {
    max = parseInt(maxInput.value, 10)
    ChangeWidth()
})