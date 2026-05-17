import Marker from "./Marker.js";
class RefillMarker extends Marker {
    constructor(color, ink) {
        super(color, ink);
    }
    refill(value) {
        this.ink += value;
        if (this.ink > 100) {
            this.ink = 100;
        }
    }
}
export default RefillMarker;