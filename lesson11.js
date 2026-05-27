//localStorage
const cl = console.log;
// localStorage.setItem("name", "Alex");
// localStorage.setItem("age", 20);
// cl(localStorage.getItem("name"));
// localStorage.removeItem("age")
// localStorage.clear()
const products = [];
const form = document.getElementById("form-add");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form).entries());
        products.push([data.product, data.price]);
        localStorage.setItem("products", JSON.stringify(products));
        form.reset();
    });
}
//Очистка страницы window.location("http://localhost:3000/lesson11.html")

