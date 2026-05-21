'use strict';
const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");
const content = document.getElementById("content");
tab1.addEventListener(
    "click",
    showTab1
);
tab2.addEventListener(
    "click",
    showTab2
);
tab3.addEventListener(
    "click",
    showTab3
);
function showTab1() {
    content.innerText = "Text of first tab";
}
function showTab2() {
    content.innerText = "Text of second tab";
}
function showTab3() {
    content.innerText = "Text of third tab";
}
