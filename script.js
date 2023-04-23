const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const resultado = document.querySelector('#resultado');
const btn = document.querySelector('#btnCalcular');
const form = document.querySelector('#form');

form.addEventListener('submit', btmOnClick);

function btmOnClick(event){
    event.preventDefault();
    const suma = input1.value + input2.value
    resultado.innerHTML = suma
}