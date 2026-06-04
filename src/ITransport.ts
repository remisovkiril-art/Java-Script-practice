interface ITransport {
    move(): void;
}
class Bus implements ITransport {
    move(): void {

    }
}
let transports: Array<ITransport> = [];
transports.push(new Bus());
let bus: Bus = new Bus();
bus.move();

