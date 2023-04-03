function checkpassword() {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let cpassword = document.getElementById("cpassword").value
    console.log(email, password, cpassword)
    let message = document.getElementById("message")
   
    if (password.length != 8) {
        if (password == cpassword) {
            message.textContent = "Passwords Match";
            message.style.backgroundColor = "#3ae374"
        }
        else { 
            message.textContent = "Password don't Match"
            message.style.backgroundColor = "#ff4d4d";
        }
    }
}
