//hosting
const cl = console.log;
// f();
// function f() { }
const f2 = function () {
    cl(arguments.length);
};
// const f3 = (x) => x * 3;
// cl(f3(5, 5));
//setTimeout, setInterval
cl("start");
setTimeout(f2, 3000, 5, 6, 7);
cl("end");


