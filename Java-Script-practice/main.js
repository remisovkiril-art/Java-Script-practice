import Square from "./Square.js";
import Rectangle from "./Rectangle.js";
import Triangle from "./Triangle.js";
const figures = [
    new Square(5),
    new Rectangle(10, 5),
    new Triangle(3, 4, 5)
];
for (let i = 0; i < figures.length; i++) {
    figures[i].show();
    console.log(
        "Площадь:",
        figures[i].getArea()
    );
    console.log(
        "Периметр:",
        figures[i].getPerimeter()
    );
}