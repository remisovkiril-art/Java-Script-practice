'use strict';
const div = document.createElement("div");
const p1 = document.createElement("p");
p1.innerText = "C++";
const p2 = document.createElement("p");
p2.innerText = "C#";
const p3 = document.createElement("p");
p3.innerText = "JS";
div.append(p1);
div.append(p2);
div.append(p3);
document.body.append(div);
const button = document.createElement("button");
button.innerText = "Block";
document.body.append(button);
button.onclick = function () {
    const language = prompt(
        "Введите язык программирования"
    );
    const newPar = document.createElement("p");
    newPar.innerText = language;
    div.append(newPar);
};
