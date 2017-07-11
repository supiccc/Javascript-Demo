var random = Math.floor(Math.random() * 10) % 2;

var big = document.querySelector('.big');
var small = document.querySelector('.small');
var resultV = document.querySelector('.result');

var choose;

function chooseBig() {
    choose = 1;
    compare();
}

function chooseSmall() {
    choose = 0;
    compare();
}

function compare() {
    if (choose === random) 
    {
        resultV.textContent = "你赢了！"
        setGameOver();
    } else {
        resultV.textContent = "你输了！"
        setGameOver();
    }
}

big.addEventListener('click', chooseBig);
small.addEventListener('click', chooseSmall);

function setGameOver() {
    big.disabled = true;
    small.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = "重新开始";
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    big.disabled = false;
    small.disabled = false;
    resultV.textContent = '';
    resetButton.parentNode.removeChild(resetButton);
    random = Math.floor(Math.random() * 10) % 2;
}