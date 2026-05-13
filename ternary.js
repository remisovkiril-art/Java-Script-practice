let a = Number(prompt("Введите первое число:"));
let b = Number(prompt("Введите второе число:"));
let max = (a > b) ? a : b;
alert("Большее число: " + max);
let num = Number(prompt("Введите число:"));
let check = (num % 5 === 0) ? "Кратно 5" : "Не кратно 5";
alert(check);
let planet = prompt("Введите название планеты:");
let message = (planet === "Земля" || planet === "земля")
    ? "Привет, землянин"
    : "Привет, инопланетянин";
alert(message);