let añoingreso = parseInt(prompt("ingresar el año en el que nacio la persona "))

function validaredad(añoingreso) {
    añoActual = new Date().getFullYear();
    edad = añoActual - añoingreso

    return edad;
}

let resultado = validaredad(añoingreso)
alert(`la edad del empelado es ${resultado}`)