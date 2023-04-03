
const decrimentBtn = document.getElementById("decrimentBtn")
const displayvalue = document.getElementById("displayvalue")
const incrementBtn = document.getElementById("incrementBtn")
const resetBtn = document.getElementById("resetBtn")

// for decrement button click

decrimentBtn.addEventListener("click", () => {
    const value = Number(displayvalue.innerText)
    if (value >0){
        displayvalue.innerText = value - 1
    } else {
        alert("Negative not allowed")
    }
})
//   for increment button click
incrementBtn.addEventListener("click", () => {
    const value = Number(displayvalue.innerText)
    if (value >1000000){
     alert("1000000+ not are allowed")
}else {
    displayvalue.innerText = value + 1
    }
  })


//   for resetBtn button click
resetBtn.addEventListener("click", () => {
    displayvalue.innerText = value = 0;
})
