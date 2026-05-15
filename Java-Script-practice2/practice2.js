'use strict';
const cl = console.log;
function changeColour() {
    const colours = ["yellow", "blue", "orange", "black", "green", "gray", "red"];
    let randomIndex = Math.floor(Math.random() * colours.length);
    this.style.backgroundColor = colours[randomIndex];
}
const div = document.querySelectorAll("div")[0];
div.style.width = "300px";
div.style.height = "300px";
div.style.backgroundColor = "gray";
function handleClick() {
    changeColour.call(div);
    div.removeEventListener("click", handleClick);
    function repeat() {
        changeColour.call(div);
        setTimeout(repeat, 1000);
    }
    setTimeout(repeat, 1000);
}
div.addEventListener("click", handleClick);
