let displayMessage = document.getElementById("message")
let button = document.getElementById("button")
let counter = 0 
let input = document.getElementById("input")

function removeAfterSetTime() {
    location.reload()
}
button.addEventListener("click", () => {
    let input = document.getElementById('input').value.toLowerCase()
    let split = input.split('')
    input.value = ""
  
    for (let i = 0; i<split.length; i++){
        if (split[i] == 'a' || split[i] == 'e' || split[i] == 'i' || split[i] == 'o' || split[i] == 'u') {
            counter++
        }
        if (counter > 1) {
            displayMessage.innerHTML = `'${input}' has ${counter} vowels`
        }
        else {
            displayMessage.innerHTML = `'${input}' has ${counter} vowel`
        }
        let timeout = setTimeout(removeAfterSetTime,2500)
    }
})
