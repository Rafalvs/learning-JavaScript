let formz = document.querySelector('formz');

let boxHeight = document.querySelector('#height');
let boxWeight = document.querySelector('#weight');

let btnSend = document.querySelector('#send');
let btnClear = document.querySelector('#clear');

let boxIMC = document.querySelector('#result');
let warning = document.querySelector('#warning');

btnSend.addEventListener('click', function (e) {
    let height = boxHeight.value;
    let weight = boxWeight.value;
    let imc = (weight / (height * height)).toFixed(1);

    console.log(imc);

    boxIMC.value = imc;
    let sit = result(imc);
    warning.textContent = sit;
    
    e.preventDefault();
});

function result(imc) {
    let imcResult = '';
    if (imc < 18.5) {
        imcResult = 'Under Weight'	
    } else if (imc >= 18.5 && imc <= 24.9) {
        imcResult = 'Normal Weight'
    } else if (imc >= 25 && imc <= 29.9) {
        imcResult = 'Overweight'
    } else if (imc >= 30 && imc <= 34.9) {
        imcResult = 'Obesity I'
    } else if (imc >= 35 && imc <= 39.9) {
        imcResult = 'Obesity II'
    } else if (imc >= 40) {
        imcResult = 'Obesity III'
    } else {
        imcResult = 'Inform your weight correctly'
    }
    return imcResult;
}
