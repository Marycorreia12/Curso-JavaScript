const data = new Date(0); //01/01/1970 Timestamp unix ou época unix
console.log(data.toString());

const date = new Date(2019, 3, 20, 15, 14, 27, 1000);
console.log(date.toString());

const date1 = new Date('2019-04-20 20:20:59');
console.log('Dia', date1.getDate());
console.log('Mês', date1.getMonth());
console.log('Ano', date1.getFullYear());
console.log('Hora', date1.getHours());
console.log('Min', date1.getMinutes());
console.log('Seg',date1.getSeconds());
console.log('ms', date1.getMilliseconds());
console.log('Dia semana', date1.getDay());
console.log(date1.toString());
console.log(Date.now());

console.log();

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(date2) {
    const dia = zeroAEsquerda(date2.getDate());
    const mes = zeroAEsquerda(date2.getMonth());
    const ano = zeroAEsquerda(date2.getFullYear());
    const hora = zeroAEsquerda(date2.getHours());
    const min = zeroAEsquerda(date2.getMinutes());
    const seg = zeroAEsquerda(date2.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const date2 = new Date();
console.log(date2);

const dataPortugal = formataData(date2);
console.log(dataPortugal);