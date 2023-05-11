// h1 { color:red }
// .parrafito { ... }
// #pid { ... }

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', (e) => {
    num1 = parseInt(input1.value);
    num2 = parseInt(input2.value);
    resultado = num1 + num2;

    e.preventDefault();
    pResult.innerHTML = 'Resultado: ' + resultado;
});
