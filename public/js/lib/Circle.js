import Shape from "./Shape.js";

export class Circle extends Shape {
    constructor() {
        super();
        this.size = 10;
    }

    setSize(x) {
        this.size = x;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.size, 0, 2* Math.PI, false);
        context.fillStyle = this.color.toHex();
        context.fill();
    }
}