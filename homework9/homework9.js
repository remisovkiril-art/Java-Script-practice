const users = [];
const form = document.getElementById("formcard");
const message = document.getElementById("message");
form.country.value = "ge";
const genders = document.getElementsByName("gender");
genders[0].checked = true;
form.addEventListener("submit", checkForm);
function checkForm(e) {
    e.preventDefault();
    let ok = true;
    const allInputs = form.querySelectorAll("input, textarea, select");
    for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].classList.remove("error");
    }
    let name = form.name.value.trim();
    let surname = form.surname.value.trim();
    let email = form.email.value.trim();
    let password = form.password.value;
    let birthday = form.birthday.value;
    let phone = form.phone.value.trim();
    let comment = form.comment.value.trim();
    if (name.length < 2) {
        form.name.classList.add("error");
        ok = false;
    }
    for (let i = 0; i < name.length; i++) {
        if (name[i] >= "0" && name[i] <= "9") {
            form.name.classList.add("error");
            ok = false;
        }
    }
    if (surname.length < 2) {
        form.surname.classList.add("error");
        ok = false;
    }
    for (let i = 0; i < surname.length; i++) {
        if (surname[i] >= "0" && surname[i] <= "9") {
            form.surname.classList.add("error");
            ok = false;
        }
    }
    if (!email.includes("@") || !email.includes(".")
    ) {
        form.email.classList.add("error");
        ok = false;
    }
    if (password.length < 5 || password.includes(" ")
    ) {form.password.classList.add("error");
        ok = false;
    }
    if (birthday == "") {
        form.birthday.classList.add("error");
        ok = false;
    }
    if (phone.length != 13 || !phone.startsWith("+380")
    ) {
        form.phone.classList.add("error");
        ok = false;
    }
    let skills = document.querySelectorAll("[name='skills']");
    let count = 0;
    for (let i = 0; i < skills.length; i++) {
        if (skills[i].checked) {
            count++;
        }
    }
    if (count < 2) {
        ok = false;
    }
    if (comment.length < 10 || comment.length > 150
    ) {
        form.comment.classList.add("error");
        ok = false;
    }
    if (!form.agreement.checked) {
        ok = false;
    }
    if (ok) {

        let user = {
            name: name,
            surname: surname,
            email: email,
            password: password,
            birthday: birthday,
            phone: phone
        };
        users.push(user);
        console.log(users);
        message.innerText = "Все заповнено вірно";
    }
    else {
        message.innerText = "Є помилки у формі";

    }
}