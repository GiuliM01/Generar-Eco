const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fields = form.querySelectorAll(
        "input[required], textarea[required], select[required]"
    );

    let formIsValid = true;

    fields.forEach(field => {
        const errorMsg = field.nextElementSibling;

        if (!field.value.trim()) {
        field.style.borderColor = "red";
        errorMsg.textContent = "Este campo es obligatorio";
        formIsValid = false;
        } else {
        field.style.borderColor = "#A88A57";
        errorMsg.textContent = "";
        }

        // Validación específica de email
        if (field.type === "email" && field.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            field.style.borderColor = "red";
            errorMsg.textContent = "Ingresá un email válido";
            formIsValid = false;
        }
        }
    });

    if (formIsValid) {
        form.submit(); // conectar Formspree / EmailJS
    }
});


