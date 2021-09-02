//Escreva uma função que recebe 2 números e retorna o maior deles

function max (num1, num2){
    if(num1 > num2){
        return num1;
    return num2;
 }

//Melhoria de código 1
return num1 > num2 ? num1 : num2;

}

//Melhoria de código 2
const max2 = (num1, num2) => {
return num1 > num2 ? num1 : num2;

};

//Melhoria de código 3
const max3 = (num1, num2) => num1 > num2 ? num1 : num2;

const maior = max(1, 2);
console.log(maior);
