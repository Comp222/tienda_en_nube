
// registro.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#registroForm");
    if (form) {
        form.addEventListener("submit", e => {
            e.preventDefault();
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;

            let users = JSON.parse(localStorage.getItem("users")) || [];

            if (users.find(u => u.email === email)) {
                alert("El usuario ya existe");
                return;
            }

            users.push({ name, email, password });
            localStorage.setItem("users", JSON.stringify(users));
            alert("Registro exitoso");
            window.location.href = "login.html";
        });
    }
});
