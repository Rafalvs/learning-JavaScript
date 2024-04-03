/* https://codepen.io/Rafalvs/pen/gOEMgaB */

let form1 = document.getElementById("form1");
form1.addEventListener("submit", validate);

function validate()
{
    let email = document.getElementById("email");

    validateEmail(email);
}

function validateEmail(input)
{
    let emailregex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (input.value.match(emailregex))
    {
        return true;
    }

    alert("E-mail inválido.");
}