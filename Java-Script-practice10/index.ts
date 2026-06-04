import { Brush } from "./Brush.js";
import { Rectangle } from "./Rectangle.js";
import { Square } from "./Square.js";
import { Circle } from "./Circle.js";
import { Triangle } from "./Triangle.js";
import { Artist } from "./Artist.js";
import { IShape } from "./IShape.js";
const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
const artist = new Artist(canvas, ctx);
const shapes: IShape[] = [];
const count = Number(
    prompt("Сколько фигур создать?")
);
for (let i = 0; i < count; i++) {
    const type = Number(
        prompt(
            "Выберите фигуру:\n" +
            "1 - Rectangle\n" +
            "2 - Square\n" +
            "3 - Circle\n" +
            "4 - Triangle"
        )
    );
    const x = Number(prompt("X"));
    const y = Number(prompt("Y"));
    const color = prompt("Цвет (red, blue, green, orange, black)") || "black";
    const lineWidth = Number(prompt("Толщина линии")) || 2;
    const brush = new Brush(color, lineWidth);
    switch (type) {
        case 1: {
            const width = Number(prompt("Ширина"));
            const height = Number(prompt("Высота"));
            shapes.push(
                new Rectangle(x, y, width, height, brush)
            );
            break;
        }
        case 2: {
            const side = Number(prompt("Сторона"));
            shapes.push(
                new Square(x, y, side, brush)
            );
            break;
        }
        case 3: {
            const radius = Number(prompt("Радиус"));
            shapes.push(
                new Circle(x, y, radius, brush)
            );
            break;
        }
        case 4: {
            const size = Number(prompt("Размер"));
            shapes.push(
                new Triangle(x, y, size, brush)
            );
            break;
        }
    }
}
artist.paint(shapes);

let selectedShape: IShape | null = null;
canvas.addEventListener(
    "click",
    (event) => {
        const mouseX = event.offsetX;
        const mouseY = event.offsetY;
        selectedShape = null;
        for (let i = 0; i < shapes.length; i++) {
            if (
                shapes[i].containsPoint(mouseX, mouseY)) {
                selectedShape = shapes[i];
                break;
            }
        }
    }
);
window.addEventListener(
    "keydown",
    (event) => {
        if (selectedShape == null) {
            return;
        }
        const step = 10;
        switch (event.key) {
            case "ArrowUp":
                selectedShape.move(0, -step);
                break;
            case "ArrowDown":
                selectedShape.move(0, step);
                break;
            case "ArrowLeft":
                selectedShape.move(-step, 0);
                break;
            case "ArrowRight":
                selectedShape.move(step, 0);
                break;
            default:
                return;
        }
        event.preventDefault();
        artist.paint(shapes);
    }
);
