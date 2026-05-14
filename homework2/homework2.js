// 1
let start = Number(prompt("Введите начало диапазона:"));
let end = Number(prompt("Введите конец диапазона:"));
let sum = 0;
for (let i = start; i <= end; i++) {
    sum += i;
}
alert(`Сумма чисел: ${sum}`);
// 2
let num1 = Number(prompt("Введите первое число:"));
let num2 = Number(prompt("Введите второе число:"));
let gcd = 1;
for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
    }
}
alert(`Наибольший общий делитель: ${gcd}`);
// 3
let number = Number(prompt("Введите число:"));
let divisors = "";
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        divisors += i + " ";
    }
}
alert(`Делители числа: ${divisors}`);
// 4
let digitNumber = prompt("Введите число:");
let digitsCount = digitNumber.length;
alert(`Количество цифр: ${digitsCount}`);
// 5
let positive = 0;
let negative = 0;
let zeros = 0;
let even = 0;
let odd = 0;
for (let i = 1; i <= 10; i++) {
    let value = Number(prompt(`Введите число ${i}:`));
    if (value > 0) {
        positive++;
    } else if (value < 0) {
        negative++;
    } else {
        zeros++;
    }
    if (value % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}
alert(
    `Положительных: ${positive}
Отрицательных: ${negative}
Нулей: ${zeros}
Четных: ${even}
Нечетных: ${odd}`
);
// 6
let answer;
do {
    let firstNumber = Number(prompt("Введите первое число:"));
    let secondNumber = Number(prompt("Введите второе число:"));
    let operator = prompt("Введите знак (+, -, *, /):");
    let result;
    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            result = firstNumber / secondNumber;
            break;
        default:
            result = "Неверный оператор";
    }
    alert(`Результат: ${result}`);
    answer = prompt("Хотите решить еще один пример (да/нет)");
} while (answer === "да");