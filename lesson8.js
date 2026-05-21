
// let a = 100;

// f2();

// function f1() {
//   console.log(a);
// }

// function f2() {
//   let a = 200;
//   f1();
// }

//getElementById, querySelector, querySelectorAll
//getElementsByClassName, getElementsByTagName
//NodeList, HtmlCollection

//Події - events
//Події мишки click
// const cl = console.log;
// const block = document.getElementById("block");
// const mainBlock = document.getElementById("main-block");
// block.style.width = "300px";
// block.style.height = "200px";
// block.style.backgroundColor = "lime";
// block.innerText = "Block-2";
// block.style.color = "black";
// block.style.fontSize = "36px";

// block.addEventListener("contextmenu", (e) => {
//     e.preventDefault();
//     block.style.backgroundColor = "red";
// });
// block.addEventListener("mouseenter", () => {
//     block.style.backgroundColor = "yellow";
// });
// block.addEventListener("mouseleave", () => {
//     block.style.backgroundColor = "lime";
// });
// // block.addEventListener("mousemove", (ev) => {
// //   console.dir(ev);
// // });
// block.addEventListener("click", (e) => {
//     //   e.stopPropagation();
//     alert("Clicked");
// });
// mainBlock.addEventListener(
//     "click",
//     () => {
//         cl("Block1");
//     },
//     //   { capture: true },
// );
// for (let i = 0; i < 100000; i++) {
//     cl("He");
// }
// const arr = Array.from({ length: 1_000_000 }, (_, i) => {
//    return i + i;
// });
// console.time();
// let value = 100;
// arr.push(arr[0]);
// arr[0] = value;
// // arr.unshift(value);
// console.timeEnd();
// document.addEventListener("keydown", (e) => {
//     alert(e.code);
//     if (e.code === "Enter") {
//     }
//     if (e.code === "KeyW") {
//     }
// });
const p = document.getElementById("text")
document.getElementById("input").addEventListener("keydown", (e) => {
    const pattern = /([a-zA-z]|[0-9])/;
    if (pattern.test(e.key)) {
        p.innerText += e.key;
    }
});