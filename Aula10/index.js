//            01234
const nome = 'Maria';

//               0         1       2
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);

alunos[0] = 'Eduardo';
console.log(alunos);

alunos[3] = 'Luíza';
console.log(alunos);
console.log(`Tamanho do array = ${alunos.length}`);

alunos.push('Ana');
alunos.push('Fábio');
console.log(alunos);

alunos.unshift('Ana');
console.log(alunos);

const removido = alunos.pop();
console.log(removido);
console.log(alunos);

const removido_comeco = alunos.shift();
console.log(removido_comeco);
console.log(alunos);

console.log(alunos.slice(2, 4));
console.log(alunos.slice(0, -2));

console.log(typeof alunos);
console.log(alunos instanceof Array);
