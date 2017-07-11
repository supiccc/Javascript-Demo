var randomNumber = Math.floor(Math.random() * 100) + 1; //Math.floor对一个数进行下舍入

//选择class创建对象
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton; 
guessField.focus();

function checkGuess() {
    var userGuess = Number(guessField.value); //把输入的参数转换成原始数值
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';  //判断竞猜次数是否为1（原始值），第一次猜测先输出 ”Previous guesses： “
    }
    guesses.textContent += userGuess + ' ';

    //判断输入猜测数字与被猜测数字的两种情况
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        //允许最大的猜测数字为10
        lastResult.textContent = 'GAME OVER!!!';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!!!';
        
        if (userGuess < randomNumber) {
            lastResult.style.backgroundColor = 'blue';
            lowOrHi.textContent = 'Last guess was too low';
        } else {
            lastResult.style.backgroundColor = 'red';
            lowOrHi.textContent = 'Last guess was too high';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);  //添加一个事件监听器到guessSubmit按钮

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;  //禁止表单输入和按钮点击
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';  //生成新<button>元素
    document.body.appendChild(resetButton);  //插入新元素
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    
    var resetParas = document.querySelectorAll('.resultParas p');
    for(var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = ''; 
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessField.value = '';
    guessSubmit.disabled = false;
    guessField.focus();

    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;

}        