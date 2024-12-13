function verificarContraseña() {
    const contraseñaGuardada = "santiago"; 
    const entrada = prompt("Introduce la contraseña:");


    const regex = /^[a-zA-Z0-9]+$/;
    if (!regex.test(entrada)) {
        alert("La contraseña solo puede contener caracteres alfanuméricos.");
        return;
    }

    // Comparar la contraseña introducida sin tener en cuenta mayúsculas y minúsculas
    if (entrada.toLowerCase() === contraseñaGuardada.toLowerCase()) {
        alert("¡Contraseña correcta!");
    } else {
        alert("Contraseña incorrecta.");
    }
}

verificarContraseña();
