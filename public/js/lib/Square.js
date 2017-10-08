import Shape from "./Shape.js";
import {Vector2} from "./math.js";

export class Square extends Shape {
    constructor() {
        super();
    }

    setSize(x) {
        this.size = new Vector2(x, x);
    }
}