'use strict';
const form = document.getElementById("formcard");
const welcomeBlock = document.createElement("div");
const text = document.createElement("h2");
const logoutBtn = document.createElement("button");
logoutBtn.innerText = "Logout";
welcomeBlock.append(text);
welcomeBlock.append(logoutBtn);
document.body.append(welcomeBlock);
welcomeBlock.hidden = true;
function setCookie(cname, cvalue, minutes) {
    const d = new Date();
    d.setTime(d.getTime() + minutes * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie =
        cname + "=" +
        encodeURIComponent(cvalue) +
        ";" +expires +";path=/";
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
let username =
    getCookie("username");
if (username != "") {
    text.innerText =
        "Привіт, " +
        username;
    form.hidden = true;
    welcomeBlock.hidden = false;
}
form.addEventListener(
    "submit",
    register
);
function register(e) {
    e.preventDefault();
    let login = form.elements.name.value;
    let password = form.elements.pwd.value;
    if (login != "" && password != "") {
        setCookie("username",login,30);
        text.innerText = "Привіт, " + login;
        form.hidden = true;
        welcomeBlock.hidden = false;
    }
}
logoutBtn.addEventListener(
    "click",
    logout
);
function logout() {
    setCookie("username","",-1);
    text.innerText = "";
    form.hidden = false;
    welcomeBlock.hidden = true;
}