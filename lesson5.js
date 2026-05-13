import Button from "./button.js";
import WindowsButton from "./WindowsButton.js";
'use strict'; 
const cl = console.log;
//function f1() {
//    let sum = 0;
//    let a = 30;
//    sum += a;
//}
//console.log(typeof f1());
//console.log(parseInt("2test") * 22);
//const user = {
//    name: "John",
//    age: 30,
//};

//const student = Object.create(user)
//student.average = 10;
//cl(student.name);
//cl(student.age);
//cl(student.average);
//const button = new Button("Click me", "green");
//button.show(cl);
const button = new WindowsButton("Add", "red", 100, 50);
cl(button);
button.show(cl);
