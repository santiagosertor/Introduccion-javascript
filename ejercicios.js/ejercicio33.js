// Función para calcular la edad de la madre en el momento del parto
function calcularEdadMadre(nacimientoMadre, nacimientoHijo) {
    return nacimientoHijo - nacimientoMadre;
}

// Solicitar los años de nacimiento
const nacimientoMadre = parseInt(prompt("Ingrese el año de nacimiento de la madre:"));
const nacimientoHijo = parseInt(prompt("Ingrese el año de nacimiento del hijo:"));

// Calcular la edad
const edadMadre = calcularEdadMadre(nacimientoMadre, nacimientoHijo);

// Mostrar el resultado
alert(`La edad de la madre en el momento del parto fue: ${edadMadre} años.`);