var button = document.querySelector('button');


function displayMessage() {
    var html = document.querySelector('html');

    var panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel);

    var msg = document.createElement('p');
    msg.textContent = "This is a messge box";
    panel.appendChild(msg);

    var closeBtn = document.createElement('button');
    closeBtn.textContent = "x";
    panel.appendChild(closeBtn);

    closeBtn.onclick = function() {
        panel.parentNode.removeChild(panel);
    }    //匿名函数
}

button.addEventListener('click', displayMessage);