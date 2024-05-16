let email = prompt("Enter your E-mail")
let password = prompt("Enter your Password")
document.getElementById('buttonz').addEventListener('click',function() {
let input1 = document.getElementById('input1').value
let input2 = document.getElementById('input2').value

    if (input1 === email && input2 === password ) {
        window.location.href = 'https://uguralizade.github.io/Projecto/'
    } else {
        alert("Email or password is incorrect.");
    }
})