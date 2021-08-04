/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é 24
Luíz Otávio nasceu em 1980.
*/ 

const nome = 'Luíz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.84;
let imc; 
imc = peso / (altura * altura);


let anoNascimento;
anoNascimento = 2021 - idade;

//Separado por + e espaço
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg');
//Separado por crazes
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
//Separado por vírgula sem espaço
console.log(nome, 'nasceu em', anoNascimento,'.');