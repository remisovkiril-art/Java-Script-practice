//3
function washDishes() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("Посуд вимито");
        }, 2000);

    });

}
function cleanRoom() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Кімнату прибрано");
        }, 4000);

    });
}
function makeDinner() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Вечеря приготована");
        }, 7000);

    });
}
washDishes()
    .then((data) => {
        console.log(data);
        return cleanRoom();
    })
    .then((data) => {
        console.log(data);
        return makeDinner();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);

    });
//4
function sortArray(array) {
    return new Promise((resolve, reject) => {
        if (array.length == 0) {
            reject("Масив порожній");
        }
        else {
            setTimeout(() => {
                array.sort((a, b) => a - b);
                resolve(array);
            }, 2000);
        }
    });
}
let numbers = [7, 2, 9, 1, 5];

sortArray(numbers)
    .then((data) => {
        console.log("Відсортований масив:", data);
        localStorage.setItem(
            "sortedArray",
            JSON.stringify(data)
        );
    })
    .catch((error) => {

        console.log(error);

    });
//5
function multiplyAsync(a, b) {
    return new Promise((resolve, reject) => {

        if (typeof a != "number" || typeof b != "number") {
            reject("Некоректні значення");
        }
        else {
            setTimeout(() => {
                resolve(a * b);
            }, 2000);
        }
    });
}
async function main() {
    try {
        const result = await multiplyAsync(6, 9);
        console.log("Результат множення:", result);
    }
    catch (error) {
        console.log(error);
    }
}
main();
