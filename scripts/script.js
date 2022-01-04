let order = [];
let clickedOrder = [];
let score = 0;

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

const colors = {
    0: green,
    1: red,
    2: yellow,
    3: blue,
};

const lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('area-selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('area-selected');
    });
}

const createColorElement = (color) => {
    return colors[color];
}

const suffledOrder = () => {
    const colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    //clickedOrder = [];
    for(let i in order) {
        const elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

const nextLevel = () => {
    score++;
    suffledOrder();
}

const playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando um novo jogo.');
    score = 0;
    nextLevel();
}

const gameOver = () => {
    alert(`Pontuação ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo.`);
    order= [];
    clickedOrder = [];

    playGame();
}

const checkOrder = () => {
    for(let i in clickedOrder) {
        if (clickedOrder[i] !== order[i]) {
            gameOver();
            break;
        }
    }

    if (clickedOrder.length === order.length) {
        alert(`Pontuação ${score}\nVocê acertou! Iniciando o próximo nível`);
        nextLevel();
    }
}

const click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    const selectedElement = createColorElement(color);
    selectedElement.classList.add('area-selected');

    setTimeout(() => {
        const element = createColorElement(color);
        element.classList.remove('area-selected');
        checkOrder();
    }, 250);
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();