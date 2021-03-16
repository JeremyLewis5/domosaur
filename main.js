const spanMess = document.querySelector('.mess-with-me');
spanMess.style.fontSize = '40px';


const paraMess = document.querySelector('p.mess-with-me');
paraMess.style.backgroundColor = 'green';

const dino1 = document.querySelector('#triceratops');
dino1.style.width = '324px';

function changeToOrange() {
    spanMess.style.color = 'orange'
}

spanMess.addEventListener('click', changeToOrange);

function redBorder() {
    dino1.style.border = '2px solid red';
}

dino1.addEventListener('click', redBorder);

const birdDino = document.querySelector('#feathers');

function makeClear() {
    birdDino.style.opacity = '0.5';
}

birdDino.addEventListener('click', makeClear);

const dinoRow = document.querySelector('#row');

function makeDinoRowGreen() {
    dinoRow.style.backgroundColor = 'green';
}

dinoRow.addEventListener('click', makeDinoRowGreen);