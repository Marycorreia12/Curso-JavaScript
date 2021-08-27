const paragrafos = document.querySelector('.paragrafos');

const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const background = estilosBody.backgroundColor;
console.log(background);

for (let p of ps){
    p.style.backgroundColor = background;
    p.style.color = '#FFFFFF';
}