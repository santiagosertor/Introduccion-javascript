const calificacion1 = parseFloat(prompt("Ingrese la calificación del examen 1 (de 1 a 5):"));
const calificacion2 = parseFloat(prompt("Ingrese la calificación del examen 2 (de 1 a 5):"));
const calificacion3 = parseFloat(prompt("Ingrese la calificación del examen 3 (de 1 a 5):"));
const calificacion4 = parseFloat(prompt("Ingrese la calificación del examen 4 (de 1 a 5):"));

function calcularPromedio(cal1, cal2, cal3, cal4) {
    const suma = cal1 + cal2 + cal3 + cal4;
    const promedio = suma / 4; // Dividir entre 4 para obtener el promedio
    return promedio;
}
// Calcular el promedio
const promedio = calcularPromedio(calificacion1, calificacion2, calificacion3, calificacion4);

// Mostrar el resultado
alert(`El promedio de las calificaciones es: ${promedio.toFixed(2)}`);