//localStorage
const cl = console.log;
let products = [];
const form = document.getElementById("form-add");
const productsBlock = document.getElementById("products");
const clearBtn = document.getElementById("clearBtn");
let savedProducts = localStorage.getItem("products");
if (savedProducts != null) {
    products = JSON.parse(savedProducts);
    showProducts();
}
form.addEventListener(
    "submit",
    saveProduct
);
function saveProduct(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    let exists = false;
    for (let i = 0;i < products.length;i++) {
        if (products[i][0] == data.product) {
            products[i][1] = data.price;
            exists = true;
        }
    }
    if (exists == false) {
        products.push([data.product,data.price]);
    }
    localStorage.setItem("products", JSON.stringify(products));
    showProducts();
    form.reset();
}
function showProducts() {
    productsBlock.innerHTML = "";
    for (let i = 0;i < products.length; i++) {
        let p = document.createElement("p");
        p.innerText = products[i][0] + " - " + products[i][1];
        productsBlock.append(p);

    }
}
clearBtn.addEventListener("click",clearData
);
function clearData() {
    localStorage.clear();
    products = [];
    productsBlock.innerHTML = "";
}
