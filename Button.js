class Button {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }
    show(cl) {
        //cl - callback
        cl(`${this.text} ${this.color}`);
    }
}
export default Button;