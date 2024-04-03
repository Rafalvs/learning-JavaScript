/* https://codepen.io/Rafalvs/pen/yLwJgNN */

let form1 = document.getElementById("form1");
form1.addEventListener("submit", validate);
console.log("funfa?");


function validate()
{
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password1 = document.getElementById("password1");
    let password2 = document.getElementById("password2");
    
    validateUsername(username);
    validateEmail(email);
    verifyPassword(password1, password2);
}

function validateUsername(input)
{
    let usernameRegex = /^[a-zA-Z0-9]+$/;

    if(input.value.match(usernameRegex))
    {
        return true;
    }

    alert("Nome de Usuário inválido, o nome deve conter apenas letras ou números e não pode possuir mais de 20 caracteres.");
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

function verifyPassword(input1, input2)
{
    if (input1.value === input2.value)
    {
        return true;
    }

    alert("As senhas não batem, elas devem ser exatamente iguais.");
}