const prompt = require("prompt-sync")();

function validarContraseñaConMensajes(contraseña) {
    let errores = [];

    if (contraseña.length < 8) {
        errores.push("La contraseña debe tener al menos 8 caracteres");
    }

    if (!/\d/.test(contraseña)) {
        errores.push("Debe incluir al menos un número");
    }

    if (!/[A-Z]/.test(contraseña)) {
        errores.push("Debe incluir al menos una letra mayúscula");
    }

    if (errores.length === 0) {
        console.log("Contraseña válida");
        return true;
    } else {
        console.log("Contraseña inválida. Revisa:");
        errores.forEach(error => console.log("  - " + error));
        return false;
    }
}

let contraseñaValida = false;

while (!contraseñaValida) {
    let entrada = prompt("Escribe tu contraseña: ");
    contraseñaValida = validarContraseñaConMensajes(entrada);
}