const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i of numeros){

    if(i === 2){
        console.log('Pulei o número 2');
        continue;
        //Continue continua para próxima iteração.
    }

    if(i === 7){
        console.log('7 encontrado, saindo...');
        break;
        //Break sai do laço
    }

    console.log(i);
}