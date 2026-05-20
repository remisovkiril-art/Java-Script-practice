'use strict';
const button = document.getElementById("btn");
const mainBlock = document.getElementById("mainBlock");
button.addEventListener(
    "click",
    addBlock
);
function addBlock() {
    const block = document.createElement("div");
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "lime"
    ];
    const number =
        Math.floor(
            Math.random() *
            colors.length
        );
    block.style.width = "100px";
    block.style.height = "100px";
    block.style.backgroundColor = colors[number];
    block.innerText = "Block";
    mainBlock.append(
        block
    );
    block.addEventListener(
        "click",
        removeBlock
    );
}
function removeBlock() {
    this.remove();
}