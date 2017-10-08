function drawShape(context, color, posX, posY, sizeX, sizeY) {
    context.fillStyle = color;
    context.fillRect(posX, posY, sizeX, sizeY);
}

function drawCircle(context, color, posX, posY, radius) {
    context.beginPath();
    context.arc(posX, posY, radius, 0, 2* Math.PI, false);
    context.fillStyle = color;
    context.fill();
}

function drawTriangle(context, color, posX, posY, size) {
    context.beginPath();
    context.moveTo(posX, posY);
    context.lineTo(posX + size, posX);
    context.lineTo(posY, posY + size);
    context.fillStyle = color;
    context.fill();
}

var purple = '#673ab7';
var pink = '#e42990';
var green = '#96e432';
var red = '#ff2032';

var canvas = document.getElementById('screen');
var context = canvas.getContext('2d');

drawShape(context, purple, 20, 10, 200, 60);

drawShape(context, pink, 200, 100, 120, 120);

drawCircle(context, green, 60, 150, 20);

drawTriangle(context, red, 125, 125, 50);