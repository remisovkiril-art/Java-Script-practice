// 1
let userName = prompt("Введите ваше имя:");
alert(`Привет, ${userName}!`);
// 2
const currentYear = 2026;
let birthYear = Number(prompt("Введите ваш год рождения:"));
let age = currentYear - birthYear;
alert(`Вам ${age} лет.`);
// 3
let squareSide = Number(prompt("Введите длину стороны квадрата:"));
let squarePerimeter = 4 * squareSide;
alert(`Периметр квадрата: ${squarePerimeter}`);
// 4
let radius = Number(prompt("Введите радиус круга:"));
let circleArea = Math.PI * radius ** 2;
alert(`Площадь круга: ${circleArea}`);
// 5
let distance = Number(prompt("Введите расстояние между городами в км:"));
let hours = Number(prompt("За сколько часов хотите добраться?"));
let speed = distance / hours;
alert(`Необходимая скорость: ${speed} км/ч`);
