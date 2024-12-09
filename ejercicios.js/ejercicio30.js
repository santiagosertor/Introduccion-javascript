function comprobarContraseña(contraseña) {
    // Comprobar la longitud de la contraseña
    const longitudValida = contraseña.length >= 8 && contraseña.length <= 12;

    // Comprobar si contiene al menos una mayúscula, una minúscula y un dígito
    const tieneMayuscula = /[A-Z]/.test(contraseña);
    const tieneMinuscula = /[a-z]/.test(contraseña);
    const tieneDigito = /\d/.test(contraseña);

    // Verificar si todos los requisitos son cumplidos
    if (longitudValida && tieneMayuscula && tieneMinuscula && tieneDigito) {
        return "Contraseña fuerte.";
    } else {
        return "Contraseña débil. Asegúrese de que la contraseña tenga entre 8 y 12 caracteres, una mayúscula, una minúscula y un dígito.";
    }
}

// Solicitar la contraseña al usuario
const contraseñaUsuario = prompt("Ingrese su contraseña:");

const resultado = comprobarContraseña(contraseñaUsuario);

// Mostrar el resultado
alert(resultado);