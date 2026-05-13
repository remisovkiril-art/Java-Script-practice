import Shape from "./Shape.js";
class Square extends Shape {
    constructor(side) {
        super();
        this.name = "Квадрат";
        this.side = side;
    }
    show() {
        console.log(
            `${this.name}: сторона = ${this.side}`
        );
    }
    getArea() {
        return this.side * this.side;
    }
    getPerimeter() {
        return this.side * 4;

    }
}
export default Square;