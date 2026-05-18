//hosting
const cl = console.log;
// f();
// function f() { }
// const f2 = function () {
//     cl(arguments.length);
// };
// const f3 = (x) => x * 3;
// cl(f3(5, 5));
//setTimeout, setInterval
// cl("start");
// setTimeout(f2, 3000, 5, 6, 7);
// cl("end");
const div = document.querySelector("div");
const list = div.getElementsByTagName("li");
console.dir(list);
const newLi = document.createElement("li");
newLi.innerText = "Block4";
document.querySelector("ul").append(newLi);
console.log(list.length);
console.dir(list);
const newBlock = document.createElement("div");
newBlock.classList.add("block");
const newPar = document.createElement("p");
newPar.innerHTML = "<i>Hello DOM</i>";
newBlock.append(newPar);
document.body.append(newBlock);


