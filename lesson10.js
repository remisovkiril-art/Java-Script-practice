//Куки cookies
// document.cookie = "user=Alex";
// document.cookie = "id=100";
function setCookie(cname, cvalue, minutes) {
    const d = new Date();
    //d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    d.setTime(d.getTime() + minutes * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie =
        cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
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

const text = document.getElementById("text");
let username = getCookie("username");
if (username) {
    text.innerText = `Welcome, ${username}`;
} else {
    text.innerText = `Welcome, guest`;
    setCookie("username", "Alex", 2);
}
// document.cookie = `city=${encodeURIComponent("Test test")}`;
// console.log(document.cookie);