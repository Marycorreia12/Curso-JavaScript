/*
Primitivos(imutáveis) - String, number, boolean, undefined, null (bigint, symbol)- valores copiados

Referência(mutável) - array, object, function - Passados por referência
*/ 

let a = [1, 2, 3];
let b = a;// b aponta para a o mesmo valor na memória
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(c);

console.log();

const d = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const e = {...d}; //neste caso e já nao aponta para o mesmo local na memória que b.

d.nome = 'João';
console.log(d);
console.log(e);

