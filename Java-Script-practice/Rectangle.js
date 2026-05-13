import Shape from "./Shape.js";
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.name = "Прямоугольник";
        this.width = width;
        this.height = height;
    }
    show() {
        console.log(
            `${this.name}: ширина = ${this.width}, высота = ${this.height}`
        );
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return (this.width + this.height) * 2;

    }
}
export default Rectangle;