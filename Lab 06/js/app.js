var numSquares = 0;
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var messageDisplay = document.querySelector('#message-display');
var finished = false;

var colors = [
    "rgb(255, 0, 0)", "rgb(255, 0, 255)", "rgb(255, 225, 0)",
    "rgb(255, 0, 255)", "rgb(0, 255, 255)", "rgb(0, 255, 0)"
];
var pickedColor = pickColor();

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
        messageDisplay.innerHTML = "&#129351; You are good at guessing! &#129312;";
    }
}

function resetColors() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    messageDisplay.innerHTML = 'Start New Game &#129338;';
    numSquares = 0;
    finished = false;
}

function gameOver() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = "#232323";
    }
    messageDisplay.innerHTML = 'Game Over! &#128556;';
}

function pickColor() {
    var random = Math.floor(Math.random() * squares.length);
    return colors[random];
}

function reset() {

    const getNum = () => Math.floor(Math.random() * 256);

    colors = [];

    for (let i = 0; i < squares.length; i++) {
        colors.push(`rgb(${getNum()}, ${getNum()}, ${getNum()})`);
    }

    pickedColor = pickColor();
    resetColors();
}

/*************** EVENT HANDLER **************** */
function clickHandler() {
    var clickedColor = this.style.backgroundColor;

    numSquares++;

    if (!finished && numSquares >= Math.floor(squares.length / 2)) {
        gameOver();
        return;
    }

    if (pickedColor === clickedColor) {
        changeColors(pickedColor);
        finished = true;
    }
    else {
        this.style.backgroundColor = "#232323";
        messageDisplay.innerHTML = "Wrong Choice! &#129335;";
    }
}

function initPage() {
    for (i = 0; i < squares.length; i++) {
        //init new colors
        squares[i].style.backgroundColor = colors[i];

        //add event listener to each square
        squares[i].addEventListener('click', clickHandler);
    }

    reset();
}

initPage();


//*************** MODES ************** */
function modeEasy() {
    const container = document.querySelector('#container');
    document.querySelectorAll('.square.ex').forEach(child => {
        container.removeChild(child);
    });

    squares = document.querySelectorAll(".square");

    reset();
}
function modeHard() {

    if (squares.length == 6) {
        const container = document.querySelector('#container');
        for (var i = 0; i < 3; i++) {
            const sq = document.createElement('span');
            sq.className = 'square ex';
            sq.addEventListener('click', clickHandler);
            container.appendChild(sq);
        }
    }

    squares = document.querySelectorAll(".square");

    reset();
}
