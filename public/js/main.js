import Shape from './lib/Shape.js';
import {PURPLE, PINK, GREEN, RED} from './lib/colors.js';
import {Square} from "./lib/Square.js";
import {Circle} from "./lib/Circle.js";
import {Triangle} from "./lib/Triangle.js";
import {ImageUpload} from "./lib/ImageUpload.js";
import {ImageUploadPosition} from "./lib/ImageUploadPosition.js";

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

document.body.addEventListener('mytest', function(e) {
   updateShapes();
});

function updateShapes() {
    context.fillStyle = '#FFFFFF';
    context.fillRect(0,0,canvas.width, canvas.height);
    shapes.forEach(shape => {
        shape.draw(context);
    });
}

let shapes = [];

let rect = new Shape();
rect.color.copy(PURPLE);
rect.setSize(200, 60);
rect.position.set(20, 10);
shapes.push(rect);

let square = new Square();
square.color.copy(PINK);
square.setSize(120);
square.position.set(200, 100);
shapes.push(square);

let circle = new Circle();
circle.color.copy(GREEN);
circle.setSize(20);
circle.position.set(60, 150);
shapes.push(circle);

let triangle = new Triangle();
triangle.color.copy(RED);
triangle.setSize(50);
triangle.position.set(125, 125);
shapes.push(triangle);

let imageUpload = new ImageUpload('fileUpload');
imageUpload.setSize(200, 100);
imageUpload.position.set(80, 250);
shapes.push(imageUpload);

let imageUpload2 = new ImageUploadPosition('fileUpload2');
imageUpload2.setSize(200, 100);
imageUpload2.position.set(80, 360);
shapes.push(imageUpload2);

updateShapes();