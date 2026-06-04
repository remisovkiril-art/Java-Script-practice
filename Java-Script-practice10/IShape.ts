import { Brush } from "./Brush.js";
export interface IShape {
    x: number;
    y: number;
    brush: Brush;
    draw(ctx: CanvasRenderingContext2D): void;
    move(dx: number, dy: number): void;
    containsPoint(x: number, y: number): boolean;
}