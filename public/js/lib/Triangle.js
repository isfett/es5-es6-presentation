import Shape from "./Shape.js";
import {Vector2} from "./math.js";

export class Triangle extends Shape {
    constructor() {
        super();
        this.size = 10;
    }

    setSize(x) {
        this.size = x;
    }

    draw(context) {
        context.beginPath();
        context.moveTo(this.position.x, this.position.y);
        context.lineTo(this.position.x + this.size, this.position.x);
        context.lineTo(this.position.y, this.position.y + this.size);
        context.fillStyle = this.color.toHex();
        context.fill();
    }
}