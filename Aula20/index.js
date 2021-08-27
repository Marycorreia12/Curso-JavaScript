const nome = 'Luiz Otávio';

for(let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

    console.log('########');

    
for(let i in nome){
    console.log(nome[i]);
}

console.log('########');


for(let i of nome){
    console.log(i);
}

console.log('########');

const nomes = ['Luiz', 'Otávio', 'Henrique'];

for(let i in nomes){
    console.log(nomes[i]);
}

    console.log('########');

for(let i of nomes){
    console.log(i);
}

console.log('########');

nomes.forEach(function(el){
    console.log(el);
});

console.log('########');

nomes.forEach(function(valor, índice, array){
    console.log(valor, índice, array);
});

//For clássico - Geralmente com iteráveis(array ou strings)
//For in - Retorna o índice ou chave(string, array ou objectos)
//For of - Retorna o valor em si(iterávies, array ou strings)