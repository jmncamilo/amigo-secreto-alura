// by Camilo Jiménez
const buttonAdd = document.querySelector('.button-add');
const buttonResult = document.querySelector('.button-draw');
const inputName = document.getElementById('amigo');
const listName = document.getElementById('listaAmigos');
const result = document.getElementById('resultado');
let arrayNames = [];

// Agregando nombre
buttonAdd.addEventListener('click', () => {
    if (!inputName.value) return alert('Debes ingresar un nombre...');

    let actualName = inputName.value;
    arrayNames.push(actualName);

    listName.innerHTML += `<li>${actualName}</li>`;
    inputName.value = '';
});

// Pintando el resultado
buttonResult.addEventListener('click', () => {
    if (arrayNames.length < 2) return alert('El sorteo debe contar con al menos 2 nombres...');

    let randomNumber = Math.floor(Math.random() * arrayNames.length);
    let arrayNameSelected = arrayNames[randomNumber];

    result.innerHTML = arrayNameSelected;

    // Limpiando cosas
    listName.innerHTML = '';
    arrayNames.length = 0;
});