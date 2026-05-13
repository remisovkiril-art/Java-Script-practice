'use strict'; 
//function f1(el) {
//    if (el %2==0 ) {
//        return 1;
//    }
//    return 0;
//}
/*const arr = [1, 2, 4, 6, 8,4];*/
//const arr2 = arr.map(f1)
//console.log(arr2);
//const arr2 = arr.filter((el) => {
//    return el > 3;
//});
/*console.log(arr2);*/
//const text = ["let", "const", "var", "function", "class"];
//const sorted = text.sort();
//console.log(sorted);
//console.log(text);
//const numbers = [90, 10, 100, 50, 20];
//numbers.sort((a, b) => a-b);
//console.log(numbers);
//const arr = [
//    "Germany",
//    "Austria",
//    "Belgium",
//    "France",
//    "Argentina",
//    "Brazil",
//    "Canada"
//];
//arr.sort(function (a, b) {
//    return a.length - b.length;
//});
//console.log(arr);
//const arr2 = arr.filter(function (el) {
//    return el[0] === "A" || el[0] === "B";
//});
//console.log(arr2);
//let check = false;
//for (let i = 0; i < arr2.length; i++) {
//    if (arr2[i] === "Austria") {
//        check = true;
//    }
//}
//console.log(check);
//const user = {
//    name: "Alex",
//    age: 30,
//    show: function () {
//        console.log(`${this.name} ${this.age}`);
//    },
//    address: { street: "new street" },
//};
//setTimeout(() => {
//    console.log("Hi");
//}, 2000
//);
//console.log("Bye");
//user.show();
//const user2 = { ...user };
//const user2 = structuredClone(user);
//user2.address.street = "old street";
//console.table(user2);
//user2.age = 25;
//console.table(user);
//Object.freeze(user);
//Object.seal(user);
//Object.preventExtensions(user);
/*user.name = "John";*/
//const a = "age";
//user.name = "John";
//user[a] = 25;
/*user.country = "USA";*/
//delete user.age;
/*console.table(user);*/
const arr = [1, 2, 3, 4];
function multiplyArray(array) {
    return array.reduce(function (total, item) {
        return total * item;
    });
}
console.log(multiplyArray(arr));
const arr2 = [10, 20, 30, 40, 50];
function removeElement(array, index) {
    array.splice(index, 1);
    return array;
}
console.log(removeElement(arr2, 2));
const arr3 = [];
const arr4 = [];
for (let i = 0; i < 5; i++) {
    arr3[i] = Math.floor(Math.random() * 21) - 10;
}
for (let i = 0; i < 5; i++) {
    arr4[i] = Math.floor(Math.random() * 21) - 10;
}
console.log(arr3);
console.log(arr4);
function commonElements(array1, array2) {
    const result = [];
    for (let i = 0; i < array1.length; i++) {
        if (
            array2.includes(array1[i]) &&
            !result.includes(array1[i])
        ) {
            result[result.length] = array1[i];
        }
    }
    return result;

}
console.log(commonElements(arr3, arr4));