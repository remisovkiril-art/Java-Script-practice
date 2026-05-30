//localStorage
// const cl = console.log;
// localStorage.setItem("name", "Alex");
// localStorage.setItem("age", 20);
// cl(localStorage.getItem("name"));
// localStorage.removeItem("age")
// localStorage.clear()
// const products = [];
// const form = document.getElementById("form-add");
// if (form) {
//     form.addEventListener("submit", (e) => {
//         e.preventDefault();
//         const data = Object.fromEntries(new FormData(form).entries());
//         products.push([data.product, data.price]);
//         localStorage.setItem("products", JSON.stringify(products));
//         form.reset();
//     });
// }
//Очистка страницы window.location("http://localhost:3000/lesson11.html")
//Promise
// cl("Start");
// new Promise((resolve, reject) => {
//     let number = Math.floor(Math.random()*10);
//     if (number <5) {
//         resolve(number);
//     } else {
//         reject(number);
//     }
// }).then((data) => cl("Data", data))
//     .catch((error) => cl("Error", error));
// cl("End");







const n = 10;
new Promise((resolve, reject) => {
    let numbers = [];
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < n; i++) {
        let number = Math.floor(Math.random() * 100);
        numbers.push(number);
        if (number % 2 == 0) {
            evenCount++;
        }
        else {
            oddCount++;
        }
    }
    console.log("Массив:", numbers);
    if (evenCount > oddCount) {
        resolve(evenCount);
    }
    else {
        reject(oddCount);
    }
})
    .then((data) => {
        console.log("Парных больше:", data);
    })
    .catch((error) => {
        console.log("Непарных больше:", error);
    });
