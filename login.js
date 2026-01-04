
// login.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#loginForm");
    if (form) {
        form.addEventListener("submit", e => {
            e.preventDefault();
            const email = form.email.value;
            const password = form.password.value;
            const users = JSON.parse(localStorage.getItem("users")) || [];

            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
                localStorage.setItem("session", JSON.stringify(user));
                alert("Inicio de sesión exitoso");
                window.location.href = "index.html";
            } else {
                alert("Credenciales inválidas");
            }
        });
    }
});
