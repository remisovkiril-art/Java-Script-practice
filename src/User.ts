class User {
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    show() {
        console.log(`${this.name} ${this.age}`);
    }
}
export default User;