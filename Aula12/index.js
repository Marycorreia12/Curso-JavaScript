function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('Maria', 'Santos', 25);
const pessoa3 = criaPessoa('João', 'Moreira', 25);
const pessoa4 = criaPessoa('Junior', 'Oliveira', 25);
const pessoa5 = criaPessoa('Jean', 'Otávio', 25);

console.log(pessoa1.nome, pessoa2.nome, pessoa4.sobrenome);

const pessoa6 = {
    nome: 'Luiz',
    sobrenome: 'Santos',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} têm ${this.idade} anos.`);
           },
     incrementaIdade() {
        this.idade++;
        }
};

pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();