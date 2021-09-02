function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        //Lançar um erro
        throw new Error('x e y precisam ser números.');
    }
    return x + y;
}

//Tratar o erro
try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
}
//Capturar o erro
catch(error){
    console.log(error);
}
