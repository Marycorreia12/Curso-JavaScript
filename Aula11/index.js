function myFunction(nome) {
    return `Bom dia ${nome}`;
}

const variavel = myFunction('Maria');
console.log(variavel);

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(5, 10));

const raiz = (n) => {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

const raiz_2 = (n) => n ** 0.5;

console.log(raiz_2(9));
console.log(raiz_2(16));
console.log(raiz_2(25));