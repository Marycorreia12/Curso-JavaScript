let umaString = "um \"texto\"";

console.log(umaString);

let outraString = "um texto";

console.log(outraString);

 //                01234567
let outrString = "um texto";

console.log(outrString[4]);
console.log(outrString.charAt(6));

//Diferentes formas de concatenar
console.log(outrString.concat(' em', ' um', ' lindo dia.'));
console.log(outrString + ' em um lindo dia.');
console.log(`${outrString} em um lindo dia.`);

console.log(outrString.indexOf('texto'));
console.log(outrString.indexOf('o', 3));
console.log(outrString.lastIndexOf('m', 3));

console.log(outrString.replace('um', 'Outro'));

let anotherString = "O rato roeu a roupa do rei de roma.";
console.log(anotherString.replace(/r/g, '#'));
console.log(anotherString.length);
console.log(anotherString.slice(2, 6));
console.log(anotherString.slice(-5));
console.log(anotherString.slice(-5, -1));

console.log(anotherString.substring(anotherString.length - 5, anotherString.length -1));

console.log(anotherString.split('r'));
console.log(anotherString.split(' ', 2));
console.log(anotherString.split(' ', 3));