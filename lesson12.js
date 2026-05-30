// console.log("Start program");
// setTimeout(() => {
//     console.log("setTimeout");
// }, 0);
// new Promise((resolve, reject) => {
//     resolve("Promise");
// }).then((mes) => console.log(mes));
// async function testAsync() {
//     console.log("test async start");
//     await null;
//     console.log("test async end");
// }
// testAsync();
// console.log("End program");
const cl = console.log;
const URL = "http://localhost:3000/posts";
const posts = document.getElementById("posts");
async function getPosts(url) {
    const response = await fetch(url);
    const data = await response.json();
    cl(data);
}
try {
    getPosts(URL);
}
catch (error) {
    cl("Error:", error);
}
// fetch(URL)
//     .then((response) => response.json())
//     .then((data) => {
//         cl(data);
//            data.forEach((el) => {
//            posts.textContent += `${el.id} : ${el.title} |`;
//            cl(`${el.id} : ${el.title}`);
//         });
//     });
