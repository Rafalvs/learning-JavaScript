/* https://codepen.io/Rafalvs/pen/BabKKGM */

function hiddenButton ()
{
    var button = document.getElementById("d20");
    button.addEventListener("click", d20);
}

function d20 ()
{
    let n = Math.round(Math.random() * 20);
    let m = message(n);
    window.alert (`você rolou: ${n}\n${m}`);
}

function message (p)
{
    if (p === 1)
    {
        return "Falha crítica!! Azedou...";
    }

    else if (p > 1 && p <= 10)
    {
        return "Vish...";
    }

    else if (p > 10 && p < 15)
    {
        return "Melhor que nada.";
    }

    else if (p >= 15 && p < 18)
    {
        return "Ufa!";
    }

    else if (p >= 18 && p <20)
    {
        return "BOA!";
    }

    else if (p === 20)
    {
        return "VINTE! ACERTO CRÍTICOOO!!";
    }

    else 
    {
        return "phnglui mglw nafh cthulhu rlyeh waghnagl fhtagn";  //coloquei pela brincadeira, mas da pra tirar o 0 com um if la na funçao
    }
}

hiddenButton();