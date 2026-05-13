'use strict'; 
//console.log("2gs" - 4);//NaN
//console.log("2" + 4);//24
//console.log("2" - 4);//-2
//console.log(typeof NaN);
//console.log("a" - 2 == "a" - 2);
//console.log(typeof ("a" - 2));
function f1() {
    let str = "";
    for (let i = 0; i < arguments.length; i++) {
        str += arguments[i] + " ";
    }
        console.log(str);
}
f1(1, 2, 3);
f1(5, 6);
let f2 = function (a, b) {
    return a + b;
};
console.log(f2(3, 4));
let f3 = (a, b) => a * b;
console.log(f3(3, 4));
//do {
//    console.log("+");
//} while (false);
//for (let i = 0; i < 5; i++) {
//    for (let j = 0; j < 5; j++) {
//        for (let k = 0; k < 5; k++) {
//            console.log(k);
//            if (k == 3) {
//                break loop1;
//            }
//        }

//    }
//}
const arr = [1, 2, 3, 4, 5];
const arr2 = new Array();
arr.push(4);
arr.pop();
console.log(arr);
console.log(arr.shift());
console.log(arr);
arr.unshift(12);
const arr3 = arr;
arr3[0] = 100;
console.log(arr);
/*arr.length*/
function base() {
    let i = 0;
    return () => {
        console.log(i++);
    };
}
let c1 = base();
let c2 = base();

c1();
c1();
c1();
c2();
c2();
c2();
