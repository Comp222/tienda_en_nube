
// cerrar_sesion.js
function cerrarSesion() {
    localStorage.removeItem("session");
    window.location.href = "login.html";
}
