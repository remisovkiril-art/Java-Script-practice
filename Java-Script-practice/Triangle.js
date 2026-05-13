import Shape from "./Shape.js";
class Triangle extends Shape {
    constructor(a, b, c) {
        super();
        this.name = "Треугольник";
        this.a = a;
        this.b = b;
        this.c = c;
    }
    show() {
        console.log(
            `${this.name}: ${this.a}, ${this.b}, ${this.c}`
        );
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        let p = this.getPerimeter() / 2;
        return Math.sqrt(
            p * (p - this.a) * (p - this.b) * (p - this.c)
        );
    }
}
export default Triangle;