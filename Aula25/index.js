//Tratar o erro
try {
    console.log('Abrir um arquivo');
    console.log('Manipulei o arquivo e gerou erro');~
    console.log('Fechei o arquivo');
try {
    console.log(b);
}
catch(e){
    console.log('Deu erro');
}
finally {
    console.log('Também sou finally');
   }
}

//Capturar o erro
catch(e){
    //é executada quando há erros
    console.log('Tratando o erro');
}
finally {
    console.log('FINALLY: Eu sempre sou executado');
}

