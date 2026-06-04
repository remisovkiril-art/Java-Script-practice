import { IShape } from "./IShape.js";
export class Artist {
    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D
    ) {
        this.canvas = canvas;
        this.ctx = ctx;
    }
    public paint(shapes: IShape[]): void {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < shapes.length; i++) {
            shapes[i].draw(this.ctx);
        }
    }
}