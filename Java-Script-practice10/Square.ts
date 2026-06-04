import { Rectangle } from "./Rectangle.js";
import { Brush } from "./Brush.js";
export class Square extends Rectangle {
    constructor(
        x: number,
        y: number,
        side: number,
        brush: Brush) {
        super(x, y, side, side, brush);
    }
}