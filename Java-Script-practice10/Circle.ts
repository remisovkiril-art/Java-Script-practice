import { Shape } from "./Shape.js";
import { Brush } from "./Brush.js";
export class Circle extends Shape {
    public radius: number;
    constructor(
        x: number,
        y: number,
        radius: number,
        brush: Brush) {
        super(x, y, brush);
        this.radius = radius;
    }
    draw(ctx: CanvasRenderingContext2D): void {
        this.applyBrush(ctx);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }
    containsPoint(x: number, y: number): boolean {
        const dx = x - this.x;
        const dy = y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance <= this.radius;
    }
}