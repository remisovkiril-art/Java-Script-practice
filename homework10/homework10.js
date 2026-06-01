function setCookie(cname, cvalue, minutes) {
    const d = new Date();
    d.setTime(d.getTime() + minutes * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
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
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
const theme = document.getElementById("theme");
const language = document.getElementById("language");
const title = document.querySelector("h1");
const text = document.querySelector("p");
const themeLabel = document.getElementById("themeLabel");
const langLabel = document.getElementById("langLabel");
let savedTheme = getCookie("theme");
let savedLanguage = getCookie("language");
if (savedTheme != "") {
    theme.value = savedTheme;
    if (savedTheme == "light") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
    else if (savedTheme == "dark") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
}
if (savedLanguage != "") {
    language.value = savedLanguage;
    if (savedLanguage == "en") {
        title.innerText = "Registration Form";
        text.innerText = "Example of modern HTML form";
        themeLabel.innerText = "Theme";
        langLabel.innerText = "Language";
    }
}
theme.addEventListener("change", changeTheme);
function changeTheme() {
    setCookie("theme",theme.value,60);
    if (theme.value == "light") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
    else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
}
language.addEventListener("change", changeLanguage);
function changeLanguage() {
    setCookie("language", language.value, 60);
    if (language.value == "en") {
        title.innerText = "Registration Form";
        text.innerText = "Example of modern HTML form";
        themeLabel.innerText = "Theme";
        langLabel.innerText = "Language";
    }
    else {
        title.innerText = "Реєстраційна форма";
        text.innerText = "Приклад сучасної HTML форми";
        themeLabel.innerText = "Тема";
        langLabel.innerText = "Мова";
    }
}