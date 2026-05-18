class PrintMachine {
    constructor(fontSize, color, fontFamily) {
        this.fontSize = fontSize;
        this.color = color;
        this.fontFamily = fontFamily;
    }
    print(text) {
        document.write(`<p style="font-size: ${this.fontSize}; color: ${this.color}; font-family: ${this.fontFamily};">${text}</p>`);
    }
}
export default PrintMachine;
