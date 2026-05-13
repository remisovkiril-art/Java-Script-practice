//let numForSquare = +prompt("Задание 1: Введите число для возведения в квадрат");
//alert("Результат (число^2): " + (numForSquare ** 2));
//let num1 = +prompt("Задание 2: Введите первое число");
//let num2 = +prompt("Задание 2: Введите второе число");
//let average = (num1 + num2) / 2;
//alert("Среднее арифметическое: " + average);
//let side = +prompt("Задание 3: Введите длину стороны квадрата");
//let area = side * side;
//alert("Площадь квадрата: " + area);
//const KM_TO_MILES = 0.621371;
//let km = +prompt("Задание 4: Введите расстояние в километрах");
//let miles = km * KM_TO_MILES;
//alert(km + " км  это " + miles.toFixed(2) + " миль");
//console.log(2 + 4);
//if(typeof )
//let a = +prompt("Введите число a");
//let b = +prompt("Введите число b");
//if (isNaN(a) || isNaN(b)) {
//    console.log("Ошибка: Введите числовые значения для a и b");
//    alert("Ошибка: вы ввели не число");
//}
//else {
//    alert("Результат: " + (a + b));
//}
//var a = 5;
//if (true) {
//    let a = 10;
//}
//console.log(a);
//var a = 10;

//function f1() {
//     a = 20;
//    function f2() {
//        var a = 30;
//    }
//}
//console.log(a);
import User from "./User.js";
const user = new User("bob");
const p = document.getElementById("name");
p.innerText = user.show();
