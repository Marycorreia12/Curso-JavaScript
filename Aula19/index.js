const frutas = ['Pera', 'Maçã', 'Uva'];

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

for(let i in frutas){
    console.log(i);
}

for(let i in frutas){
    console.log(frutas[i]);
} 

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for(let i in pessoa){
    console.log(i);
}

for(let i in pessoa){
    console.log(pessoa);
}

for(let i in pessoa){
    console.log(pessoa[i]);
}

for(let i in pessoa){
    console.log(i, pessoa[i]);
}