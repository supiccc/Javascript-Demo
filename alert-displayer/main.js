var button = document.querySelector('button');


function displayMessage(msgText) {
    var html = document.querySelector('html');

    var panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel);

    var msg = document.createElement('p');
    msg.textContent = msgText;
    panel.appendChild(msg);

    var closeBtn = document.createElement('button');
    closeBtn.textContent = "x";
    panel.appendChild(closeBtn);

    closeBtn.onclick = function() {
        panel.parentNode.removeChild(panel);
    }    //匿名函数
}

//不能使用addEventLisener方法，因为带有参数将会立即显示而不是在动作后调用
//错误：button.addEventLisener('click', displayMessage("Hello!"));
//错误：button.onclick = displayMessage("Hello!");
button.onclick = function() {
    displayMessage("Woo! This is a new message!");
} 