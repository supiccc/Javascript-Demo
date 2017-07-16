var btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random()*number);
}

function bgChange() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}

// btn.onclick = bgChange; //点击时

// btn.onfocus = bgChange; //聚焦
// btn.onblur = bgChange;  //未聚焦

// btn.ondblclick = bgChange; //双击

// window.onkeypress = bgChange; //敲击字母键和数字键非功能键
// window.onkeyup = bgChange; //任意键弹起时触发

btn.onmouseover = bgChange; //鼠标移过去触发

/* addEventListener() */
// btn.addEventListener('click', bgChange); 
// btn.addEventListener('click', function() {
//     var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     document.body.style.backgroundColor = rndCol;   
// })