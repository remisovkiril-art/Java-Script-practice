'use strict';
const button = document.getElementById("btn");
const text = document.getElementById("text");
const saveText = text.innerText;
button.addEventListener(
    "click",
    hideShow
);
function hideShow() {
    if (text.innerText != "") {
        text.innerText = "";
    }
    else {
        text.innerText = saveText;
    }
}
