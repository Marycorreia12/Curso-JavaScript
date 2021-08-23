// ? : --> Operação Ternária
//(condiçao) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';

const corUsuario = 'pink';
const corPadrao = corUsuario || 'preta';

console.log(nivelUsuario, corPadrao);


if(pontuacaoUsuario >= 1000){
    console.log('Usuario VIP');
}
else {
    console.log('Usuario normal');
}