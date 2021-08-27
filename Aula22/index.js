console.log('----------------FOR--------------------');
for (let i = 0; i <=10; i++){
    console.log(i);
}
console.log('----------------WHILE-------------------');

let i = 0;

while(i <= 10){
    console.log(i);
    i++;
}
console.log();

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while(rand != 10){
    rand = random(min, max);
console.log(rand);
}

console.log('----------------do_while-------------------');

do {
    console.log(rand); 
}
    while(rand != 10);
