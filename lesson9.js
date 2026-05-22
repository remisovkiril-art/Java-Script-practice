const cl = console.log;
const form = document.forms.formcard;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = [...new FormData(form).entries()];
    cl(JSON.stringify(data));
    // cl(form.elements.name.value);
    // cl(form.elements.surname.value);

    // const data = new FormData(form);
    // console.dir(Object.entries(data));
});
