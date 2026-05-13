//console.log("1");
//setTimeout(() => {
//    console.log("3");
//}, 5000);
//let i = 0;
//const interval = setInterval(() => {
//    if (i > 10) {
//        clearInterval(interval);
//    }
//    console.log(i);
//    i++;
//}, 1000);
//console.log("2");
//function f3() {
//    console.log("func f3");

//}
//function f2() {
//    console.log("func f2");
//    f3();
//}
//function f1() {
//    console.log("func f1");
//    f2();
//}
//f1();
//function f1() {
//    throw new Error("My error");
//}
//try {
//    f1();
//} catch (error) {
//    console.log(error);
//}
import User from "./User.js";
const user = new User("bob");
const p = document.getElementById("name");
p.innerText = user.show();
