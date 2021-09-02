function retornaHora(data){
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt', {
        hour12: false
    });
}

    try {
        const hora = retornaHora();
        console.log(hora);
    }
    catch(e){
        //Tratar o erro
        console.log(e);
    }
    finally {
        console.log('Tenha um bom dia.')
    }
