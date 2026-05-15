'use strict';
const cl = console.log;
// class Test { }
// cl(typeof Test);
// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.show = function () {
//         cl(`Name: ${this.name}, Age: ${this.age}`);
//     };
// }
// const user1 = new User("Bob", 25);
// user1.show();
// cl(typeof user1);
// cl(user1)
// cl(2 + 2 ^ 2 * 2);
// let result = (2 + 2) || (4 + 3);
// cl(result);
// let result2 = 2 + 2 && 4 + 3;
// cl(result2);
// let a = 5;
// cl(a.__proto__ === Number.prototype);
// class Test { }
// cl(Test.__proto__ === Function.prototype);
// const test = new Test();
// cl(test.__proto__ === Test.prototype);
// function f1(...args) {
//     cl(args);
// }
// f1(1, 2, 3);
// function f2(arr) {
//     cl(...arr);
// }
// f2([4, 5, 6]);
// const obj = { id:2, name: "Bob", age: 25 };
// const obj2 = { ...obj, id: obj.id + 1, group: "Group A" };
// cl(obj, obj2);
// const arr = [1, 2, 3];
// const arr2 = [...arr, 4, 5];
// cl(arr, arr2);
// const { id, name, ...age } = obj;
// cl(id, name, age);
// const [a, b] = arr2.slice(1, 3);
function f1(colour, text) {
    this.style.backgroundColor = colour;
    this.innerText = text;
    cl(`THIS: ${this}`);
}
const btn1 = document.querySelectorAll("button")[0];
const btn2 = document.querySelectorAll("button")[1];
btn1.onclick = function () {
    // f1.call(btn2, "blue","Add");
    // f1.apply(btn2, ["blue", "Delete"]);
    // const f = f1.bind(btn2);
    // f("blue", "Delete");
};
// const buttons = document.querySelectorAll("button");
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", f1);
// }
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].onclick = f1;
// }



