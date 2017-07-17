var btn = document.querySelector('.dark');
var displayedImg = document.querySelector('.displayed-img');
var overlay = document.querySelector('.overlay');

//按钮控制正在展示的照片灰暗
//The button control the image of Daken/Lighten
btn.onclick = function() {
    if (btn.getAttribute('class') == 'dark') {
        btn.setAttribute('class', 'lighten');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)' //加阴影;
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}

//add image bar;
var imgBar = document.querySelector('.img-bar')
for (var i = 1; i <= 4; i++) {
    var newImg = document.createElement('img');
    // newImg.setAttribute('class', 'small');
    newImg.setAttribute('src', 'img/' + i + '.png');
    imgBar.appendChild(newImg);
    //点击缩略图
    newImg.addEventListener('click', function(e) {
        var imgSrc = e.target.getAttribute('src');
        displayedImg.setAttribute('src', imgSrc);
    })
}
