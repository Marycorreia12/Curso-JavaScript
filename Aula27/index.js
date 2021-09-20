/*Declaraçao de funçao (Function hoisting)*/

function falaOi() {
    console.log('Oi');
}
falaOi();

//Fisrt-class objects (Objetos de primeira classe)
//Function expression
const SouUmDado = function(){
    console.log('Sou um dado');
};
SouUmDado();

function executaFuncao(funcao) {
    console.log('Vou executar sua funçao abaixo:');
    funcao();
};
executaFuncao(SouUmDado);

//Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

//Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};
obj.falar();

/*Return*/
console.log();

function soma(a, b){
    return a + b;
}
console.log(soma(5, 2));

function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1);

const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
};
console.log(p2);


function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10));

/*Escopo léxico*/
console.log();

const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Otávio';
    falaNome();
}
usaFalaNome();


/* Closures */
console.log();

function retornaFuncao (nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());

/* Funçoes de callback */
console.log();

function rand (min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function() {
        console.log('f1');
        if(callback) callback();
    }, rand()); 
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if(callback) callback();
    }, rand()); 
}

function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if(callback) callback();
    }, rand()); 
}

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá mundo!');
}

/* IIFE -> Immediately invoked function expression - Funções imediatas*/
console.log();

(function(idade, peso, altura) {

    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luiz'));
    }
    falaNome();
    console.log(idade, peso, altura);

})
(30, 80, 1.80);

/* Factory Functions - Funções fábrica*/
console.log();

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,

        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        
        altura: a,
        peso: p,
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
const p = criaPessoa('Luis', 'Otávio', 1.8, 80);
p.nomeCompleto = 'Maria Silva';
console.log(p.nome);
console.log(p.sobrenome);
console.log(p.fala('falando qualquer coisa'));
console.log(p.imc);

/* Funções Construtoras */
console.log();
function Pessoa(nome, sobrenome){
    //Atributos ou métod privados
    const ID = 1234;
    const metodoInterno = function(){

    };

    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Sou um método');
    };
}

const pessoa1 = new Pessoa('Maria', 'Santos');
console.log(pessoa1);

const pessoa2 = new Pessoa('João', 'Correia');
console.log(pessoa2);


/* Funções recursivas */
console.log();
function recursiva(max) {
    console.log(max);
    if(max >= 10) return;
    max++;
    recursiva(max);
}
recursiva(0);

/* Funções geradoras */

console.log();

//Exemplo 1
function* geradora1() {
    //Código qualquer...
    yield 'Valor 1';
    //Código qualquer...
    yield 'Valor 2';
    //Código qualquer...
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

//Exemplo 2
function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

//Exemplo 3

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
    for(let valor of g4){
    console.log(valor);
}

function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    };

    // ...

    yield function() {
        console.log('Vim do y2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();




