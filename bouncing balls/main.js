var canvas = document.querySelector('canvas');

var para = document.querySelector('p');
var count = 0;

var ctx = canvas.getContext('2d');  //ctx为绘制的画布；

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;  //浏览器窗口高度和宽度；

function random(min, max) {
    var num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

function Shape(x, y, velX, velY, exists) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = exists;
}

function Ball(x, y, velX, velY, exists, color, size) {
    Shape.call(this, x, y, velX, velY, exists);
    this.color = color;
    this.size = size; //半径
}
Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;

//绘制
Ball.prototype.draw = function() {
    ctx.beginPath(); //开始在纸上绘制一个形状
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); //跟踪弧形
    ctx.fill(); //填充
    // ctx.stroke() 不填充
}
//运动
Ball.prototype.update = function() {
    if((this.x + this.size) >= width || (this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }
    if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
}
//判断碰撞
Ball.prototype.collisionDetect = function () {
    for (var j = 0; j < balls.length; j++) {
        if (!(this === balls[j])) {
            var dx = this.x - balls[j].x;
            var dy = this.y - balls[j].y;
            var distance = Math.sqrt(dx * dx + dy * dy);

            if(distance < this.size + balls[j].size) {
                balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
            }
        }
    }
}

//定义一个邪恶圈类
function EvilCircle(x, y, exists) {
    Shape.call(this, x, y, exists);
    this.color = 'white';
    this.size = 10;
    this.velX = 20;
    this.velY = 20;
}
EvilCircle.prototype = Object.create(Shape.prototype);
EvilCircle.prototype.constructor = EvilCircle;
//绘制
EvilCircle.prototype.draw = function() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    //arc.(x, y, radius, startAngle, endAngle, anticlockwise);
    ctx.stroke();
}
//判断边界
EvilCircle.prototype.checkBounds = function() {
    if ((this.x + this.size) >= width) {
        this.x -= this.size;
    }
    if ((this.x - this.size) <= 0) {
        this.x += this.size;
    }
    if ((this.y + this.size) >= height) {
        this.y -= this.size;
    }
    if ((this.y - this.size) <= 0) {
        this.y += this.size;
    }
}
//增加控制器
EvilCircle.prototype.setControls = function() {
    var _this = this;
    window.onkeydown = function(e) {
        if (e.keyCode === 65) {
            _this.x -= _this.velX;
        }
        if (e.keyCode === 68) {
            _this.x += _this.velX;
        }
        if (e.keyCode === 87) {
            _this.y -= _this.velY;
        }
        if (e.keyCode === 83) {
            _this.y += _this.velY;
        }
    }
}
//判断碰撞
EvilCircle.prototype.collisionDetect = function () {
    for (var j = 0; j < balls.length; j++) {
        if (balls[j].exists) {
            var dx = this.x - balls[j].x;
            var dy = this.y - balls[j].y;
            var distance = Math.sqrt(dx * dx + dy * dy);

            if(distance < this.size + balls[j].size) {
                balls[j].exists = false;
                count -= 1;
                para.textContent = 'Balls Count:' + count;
            }
        }
    }
}

var evil = new EvilCircle(random(0, width), random(0, height), true);
evil.setControls();

var balls = [];
//动画
function loop() {
    ctx.fillStyle = 'rgba(64, 155, 166, 0.4)'; //设置画布填充颜色
    ctx.fillRect(0, 0, width, height);  //掩盖上一帧的绘图，掩盖球运动轨迹而保存球的位置，不拖尾

    //新建25个球
    while (balls.length < 25) {
        var ball = new Ball(
            random(0, width),
            random(0, height),
            random(-7, 7),
            random(-7, 7),
            true,
            'rgb(' + random(0, 255) + ',' + random(0 ,255) + ',' +random(0, 255) +')',
            random(10, 20),
        )
        balls.push(ball);
        count ++;
        para.textContent = 'Balls Count:' + count;
    }

    //绘制并运动
    for (var i = 0; i < balls.length ; i++) {
        if (balls[i].exists) {
            balls[i].draw();
            balls[i].update();
            balls[i].collisionDetect();
        }
    }
    evil.draw();
    evil.checkBounds();
    evil.collisionDetect();
    requestAnimationFrame(loop); //重绘前回调执行函数更新动画，重绘频率默认每秒60次
}

loop();