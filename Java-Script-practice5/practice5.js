'use strict';
const form = document.forms.formcard;
form.elements.country.value = "ge";
form.elements.gender[0].checked = true;
form.addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById(
        "message"
    ).innerText = "";
    const inputs = document.querySelectorAll(
            "input, textarea, select"
        );
    for (let i = 0; i < inputs.length; i++) {

        inputs[i].classList.remove(
            "error"
        );

    }
    let ok = true;
    let name = form.elements.name.value.trim();
    let hasNumber = false;

    for (let i = 0; i < name.length; i++) {

        if (
            name[i] >= "0"
            &&
            name[i] <= "9"
        ) {
            hasNumber = true;
        }

    }

    if (
        name.length < 2
        ||
        hasNumber
    ) {

        form.elements.name
            .classList.add("error");

        ok = false;

    }

    let surname =
        form.elements.surname.value.trim();

    hasNumber = false;

    for (let i = 0; i < surname.length; i++) {

        if (
            surname[i] >= "0"
            &&
            surname[i] <= "9"
        ) {
            hasNumber = true;
        }

    }

    if (surname.length < 2 || hasNumber
    ) {
        form.elements.surname.classList.add("error");

        ok = false;

    }
    let email =
        form.elements.email.value.trim();

    let dog = false;

    for (let i = 0; i < email.length; i++) {

        if (email[i] == "@") {
            dog = true;
        }

    }

    if (!dog) {

        form.elements.email
            .classList.add("error");

        ok = false;

    }

    let password =
        form.elements.password.value;

    let space = false;

    for (let i = 0; i < password.length; i++) {

        if (password[i] == " ") {
            space = true;
        }

    }

    if (
        password.length < 5
        ||
        space
    ) {

        form.elements.password
            .classList.add("error");

        ok = false;

    }

    let birthday =
        form.elements.birthday.value;

    if (birthday == "") {

        form.elements.birthday
            .classList.add("error");

        ok = false;

    }

    let phone =
        form.elements.phone.value;

    if (
        phone.length != 13
        ||
        phone[0] != "+"
        ||
        phone[1] != "3"
        ||
        phone[2] != "8"
        ||
        phone[3] != "0"
    ) {

        form.elements.phone
            .classList.add("error");

        ok = false;

    }

    let skills =
        document.querySelectorAll(
            '[name="skills"]'
        );

    let count = 0;

    for (let i = 0; i < skills.length; i++) {

        if (skills[i].checked) {

            count++;

        }

    }

    if (count < 2) {

        ok = false;

    }

    let comment = form.elements.comment.value.trim();

    if (
        comment.length < 10 || comment.length > 150) {
        form.elements.comment.classList.add("error");
        ok = false;
    }
    if (!form.elements.agreement.checked) {
        form.elements.agreement.classList.add("error");
        ok = false;
    }
    if (ok) {
        document.getElementById("message").innerText = "Все заповнено вірно";
    }
});