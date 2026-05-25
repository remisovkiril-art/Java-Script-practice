import User from "./User.js";
function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(4, 5));
console.log(sum(1, 3));
console.log(sum(10, 3));
const user: User = new User("Alex", 20);
user.show();