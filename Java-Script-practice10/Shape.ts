import { Brush } from "./Brush.js";
import { IShape } from "./IShape.js";
export abstract class Shape implements IShape {
    public x: number;
    public y: number;
    public brush: Brush;
    constructor(x: number, y: number, brush: Brush) {
        this.x = x;
        this.y = y;
        this.brush = brush;
    }
    public move(dx: number, dy: number): void {
        this.x += dx;
        this.y += dy;
    }
    protected applyBrush(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.brush.fillColor;
        ctx.lineWidth = this.brush.lineWidth;
    }
    abstract draw(ctx: CanvasRenderingContext2D): void;
    abstract containsPoint(x: number, y: number): boolean;
}