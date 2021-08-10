const numero = Number(prompt('Dogite um número'));
document.getElementById("numero-titulo").innerHTML = numero;

document.getElementById("texto").innerHTML += 
`<p>Raiz quadrada: ${Math.sqrt(numero)}.</p>`;

document.getElementById("texto").innerHTML += 
`<p>${numero} é inteiro? ${Number.isInteger(numero)}</p>`;

document.getElementById("texto").innerHTML += 
`<p>${numero} é NaN? ${Number.isNaN(numero)}</p>`;

document.getElementById("texto").innerHTML += 
`<p>Arredondamento para baixo: ${Math.floor(numero)}.</p>`;

document.getElementById("texto").innerHTML += 
`<p>Arredondamento para cima: ${Math.ceil(numero)}.</p>`;

document.getElementById("texto").innerHTML += 
`<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;

