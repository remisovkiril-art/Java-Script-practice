import Button from './Button.js';
class WindowsButton extends Button {
    constructor(text, color, width, height) {
        super(text, color);
        this.width = width;
        this.height = height;

    }
}
export default WindowsButton;
