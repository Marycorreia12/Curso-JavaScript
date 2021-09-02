//Escreva um funçao que recebe um numero e retorne o seguinte:
//Número é divisivel por 3 = Fizz
//Número é divisivel por 5 = Buzz
//Número é divisivel por 3 e 5 = FizzBuzz
//Número NÃO é divisivel por 3 e 5 = Retorna o próprio número
//Checar se o número é realmente um número)
//Use a função com números de 0 A 100


//Número é divisivel por 3 = Fizz
function divisivel(num){
    if(typeof num !== 'number')return num;
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz'; 
    return num;
}

console.log('a', divisivel('a'));
for (let i = 0; i <=100; i++){
    console.log(i, divisivel(i));
}
