'use strict';
const car = {
    manufacturer: "BMW",
    model: "X5",
    year: 2020,
    speed: 100
};
function showCarInfo(obj) {
    alert(
        `Производитель: ${obj.manufacturer}
Модель: ${obj.model}
Год: ${obj.year}
Средняя скорость: ${obj.speed}`
    );
}
function calculateTime(obj, distance) {
    let time = distance / obj.speed;
    let rest = Math.floor(time / 4);
    time += rest;
    return time;
}
showCarInfo(car);
let distance = Number(prompt("Введите расстояние"));
alert(`Необходимое время: ${calculateTime(car, distance)} часов`);
const printMachine = {
    fontSize: "20px",
    color: "blue",
    fontFamily: "Arial",
    print: function (text) {
        alert(
            `Размер шрифта: ${this.fontSize}
Цвет: ${this.color}
Шрифт: ${this.fontFamily}
Текст: ${text}`
        );
    }
};
alert("Подождите 5 секунд и нажмите ОК для запуска printMachine");
printMachine.print("Привет мир");
