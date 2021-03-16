const spanMess = document.querySelector('.mess-with-me');
spanMess.style.fontSize = '40px';


const paraMess = document.querySelector('p.mess-with-me');
newSpan.style.backgroundColor = 'green';

const dino1 = document.querySelector('#triceratops');
dino1.style.width = '324px';

function changeToOrange() {
    spanMess.style.color = 'orange'
}

spanMess.addEventListener('click', changeToOrange);
