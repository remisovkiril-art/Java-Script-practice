let num = 1000;
let count = 0;
do {
    num = num / 2;
    count++;
} while (num >= 50);
alert("Число: " + num);
alert("Количество делений: " + count);
let userNumber = Number(prompt("Введите число:"));
let result = "";
for (let i = 1; i <= 100; i++) {
    if (i % userNumber === 0) {
        result += i + " ";
    }
}
alert(result);