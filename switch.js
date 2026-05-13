let month = Number(prompt("Введите номер месяца 1-12:"));
switch (month) {
    case 1: alert("Январь"); break;
    case 2: alert("Февраль"); break;
    case 3: alert("Март"); break;
    case 4: alert("Апрель"); break;
    case 5: alert("Май"); break;
    case 6: alert("Июнь"); break;
    case 7: alert("Июль"); break;
    case 8: alert("Август"); break;
    case 9: alert("Сентябрь"); break;
    case 10: alert("Октябрь"); break;
    case 11: alert("Ноябрь"); break;
    case 12: alert("Декабрь"); break;
    default: alert("Неверный номер");
}
let num1 = Number(prompt("Введите первое число:"));
let num2 = Number(prompt("Введите второе число:"));
let sign = prompt("Введите знак (+, -, *, /):");
let result;
switch (sign) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    default:
        alert("Неверный знак");
}
alert("Результат: " + result);
