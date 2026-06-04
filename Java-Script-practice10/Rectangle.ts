import { Shape } from "./Shape.js";
import { Brush } from "./Brush.js";
export class Rectangle extends Shape {
    public width: number;
    public height: number;
    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
        brush: Brush) {
        super(x, y, brush);
        this.width = width;
        this.height = height;
    }
    draw(ctx: CanvasRenderingContext2D): void {
        this.applyBrush(ctx);
        ctx.beginPath();
        ctx.rect(
            this.x,
            this.y,
            this.width,
            this.height
        );
        ctx.fill();
        ctx.stroke();
    }
    containsPoint(x: number, y: number): boolean {
        return (
            x >= this.x &&
            x <= this.x + this.width &&
            y >= this.y &&
            y <= this.y + this.height
        );
    }
}