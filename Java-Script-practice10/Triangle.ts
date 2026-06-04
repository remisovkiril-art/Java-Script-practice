import { Shape } from "./Shape.js";
import { Brush } from "./Brush.js";
export class Triangle extends Shape {
    public size: number;
    constructor(
        x: number,
        y: number,
        size: number,
        brush: Brush) {
        super(x, y, brush);
        this.size = size;
    }
    draw(ctx: CanvasRenderingContext2D): void {
        this.applyBrush(ctx);
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
            this.x - this.size,
            this.y + this.size);
        ctx.lineTo(
            this.x + this.size,
            this.y + this.size);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
    private triangleArea(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        x3: number,
        y3: number
    ): number {
        return Math.abs(
            (
                x1 * (y2 - y3) +
                x2 * (y3 - y1) +
                x3 * (y1 - y2)
            ) / 2
        );
    }
    containsPoint(x: number, y: number): boolean {
        const x1 = this.x;
        const y1 = this.y;
        const x2 = this.x - this.size;
        const y2 = this.y + this.size;
        const x3 = this.x + this.size;
        const y3 = this.y + this.size;
        const area = this.triangleArea(x1, y1, x2, y2, x3, y3);
        const area1 = this.triangleArea(x, y, x2, y2, x3, y3);
        const area2 = this.triangleArea(x1, y1, x, y, x3, y3);
        const area3 = this.triangleArea(x1, y1, x2, y2, x, y);
        return Math.abs(
            area - (area1 + area2 + area3)
        ) < 0.1;
    }
}