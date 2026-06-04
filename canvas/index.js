const canvas = document.getElementById("mycanvas");
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;
const ctx = canvas.getContext("2d");
const dx = 50;
let x = 0;
ctx.arc(300, 300, 80, 0, 2 * Math.PI, true);
ctx.fillStyle = "red";
ctx.stroke();
ctx.fill();
// ctx.moveTo(50, 150);
// ctx.lineTo(200, 50);
// ctx.lineTo(250, 150);
// ctx.closePath();
// ctx.strokeStyle = "yellow";
// ctx.lineWidth = "3";
// ctx.lineCap = "butt";
// ctx.fillStyle = "blue";
// ctx.stroke();
// ctx.fill();
// ctx.moveTo(50, 50);
// ctx.strokeStyle = "orange";
// ctx.lineWidth = "2";
// //ctx.lineCap = 'round'; //форма краёв square, butt

// ctx.lineTo(300, 50);

// ctx.lineTo(150, 80);

// ctx.closePath();
// ctx.stroke();
//ctx.beginPath();

// setInterval(() => {
//   context.clearRect(0, 0, width, height);
//   //context.rect(x, 0, 70, 70); //?
//   context.strokeStyle = "green";
//   context.strokeRect(x, 0, 70, 70);

//   //   context.fillStyle = "yellow";
//   //   context.fillRect(x, 0, 70, 70);
//   x += dx;
// }, 300);