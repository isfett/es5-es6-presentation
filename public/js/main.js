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

let fileUploadImg = null;
let upload = document.getElementById('fileUpload');
if(upload === null){
    upload = document.createElement('input');
    upload.type = 'file';
    upload.id = 'fileUpload';
    upload.name='fileUpload';
    document.body.appendChild(upload);
}
upload.addEventListener('change', (e)=>{
    let reader = new FileReader();
    reader.onload = function(event){
        let img = new Image();
        img.onload = () => {
            fileUploadImg = img;
            context.drawImage(fileUploadImg, 80, 250, 200, 100);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
}, false);


let fileUploadImg2 = null;
let posX = 80;
let upload2 = document.getElementById('fileUpload2');
if(upload2 === null){
    upload2 = document.createElement('input');
    upload2.type = 'file';
    upload2.id = 'fileUpload2';
    upload2.name='fileUpload';
    document.body.appendChild(upload2);
}
let plusMinusContainer = document.getElementById('fileUpload2plusminuscontainer');
if(plusMinusContainer === null){
    plusMinusContainer = document.createElement('span');
    plusMinusContainer.id = 'fileUpload2plusminuscontainer';
    let plus = document.createElement('button');
    plus.textContent = '+';
    plus.classList.add('plusminusbutton');
    plusMinusContainer.appendChild(plus);
    let minus = document.createElement('button');
    minus.textContent = '-';
    minus.classList.add('plusminusbutton');
    plusMinusContainer.appendChild(minus);
    document.body.appendChild(plusMinusContainer);
}
let plus = plusMinusContainer.childNodes[0];
let minus = plusMinusContainer.childNodes[1];
plus.addEventListener('click', (e) => {
    posX += 10;
    context.fillStyle = '#FFFFFF';
    context.fillRect(0,0,canvas.width,canvas.height);
    drawShape(context, purple, 20, 10, 200, 60);

    drawShape(context, pink, 200, 100, 120, 120);

    drawCircle(context, green, 60, 150, 20);

    drawTriangle(context, red, 125, 125, 50);
    context.drawImage(fileUploadImg, 80, 250, 200, 100);

    context.drawImage(fileUploadImg2, posX, 360, 200, 100);
    return false;
});
minus.addEventListener('click', (e) => {
    posX -= 10;
    context.fillStyle = '#FFFFFF';
    context.fillRect(0,0,canvas.width,canvas.height);
    drawShape(context, purple, 20, 10, 200, 60);

    drawShape(context, pink, 200, 100, 120, 120);

    drawCircle(context, green, 60, 150, 20);

    drawTriangle(context, red, 125, 125, 50);
    context.drawImage(fileUploadImg, 80, 250, 200, 100);

    context.drawImage(fileUploadImg2, posX, 360, 200, 100);
    return false;
});
upload2.addEventListener('change', (e)=>{
    let reader = new FileReader();
    reader.onload = function(event){
        let img = new Image();
        img.onload = () => {
            fileUploadImg2 = img;
            context.drawImage(fileUploadImg2, posX, 360, 200, 100);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
}, false);