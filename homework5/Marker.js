class Marker {
    constructor(color, ink) {
        this.color = color;
        this.ink = ink;
    }
    print(text) {
        let result = "";
        for (let i = 0; i < text.length; i++) {
            if (this.ink <= 0) {
                break;
            }
            result += text[i];
            if (text[i] != " ") {
                this.ink -= 0.5;
            }
        }
        document.write(
            `<p style="color:${this.color}">
        ${result}
        </p>`
        );
    }
}
export default Marker;
