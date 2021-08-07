
//confirm
let txt;
let r = confirm("Press a button!");
if (r == true) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}

document.getElementById("testeConfirm").innerHTML = txt;


//prompt
let num1 = prompt('Digite um número');
let num2 = prompt('Digite outro número');

num1 = Number(num1);
num2 = Number(num2);
const resultado = num1 + num2;

document.getElementById("testePrompt").innerHTML = `O resultado da sua soma foi ${resultado}`;

//alert
const alerta = alert(' O resultado da sua conta foi: ' + resultado);

