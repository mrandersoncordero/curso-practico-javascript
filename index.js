// h1 { color:red }
// .parrafito { ... }
// #pid { ... }

const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});


h1.innerHTML = 'El HAHAS <br> Alias Joker'; // innerHTML inserta HTML en tu HTML reconociendo las etiquetas
h1.innerText = 'El HAHAS <br> Alias Joker' // Inserta Texto plano en tu HTML
// console.log(h1.getAttribute('class'))
// h1.setAttribute('class', 'rojo')

h1.classList.add('rojo');
h1.classList.remove('rojo');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');

input.value = '456';

const img = document.createElement('img');
img.setAttribute('src', 'https://imageboss.me/integrations/javascript-logo.svg');
console.log(img);

pid.innerHTML = "";
pid.appendChild(img);