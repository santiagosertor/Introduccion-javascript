function calcularPromedioFinal(parcial1, parcial2, parcial3, examenFinal, trabajoFinal) {
    // Calcular promedio de parciales
    const promedioParciales = (parcial1 + parcial2 + parcial3) / 3;

    // Calcular cada componente
    const porcentajeParciales = promedioParciales * 0.55;
    const porcentajeExamen = examenFinal * 0.30;
    const porcentajeTrabajo = trabajoFinal * 0.15;

    // Sumar para obtener el promedio final
    const promedioFinal = porcentajeParciales + porcentajeExamen + porcentajeTrabajo;
    return promedioFinal;
}

// Ejemplo de uso
const parcial1 = 8; // Calificación del primer parcial
const parcial2 = 9; // Calificación del segundo parcial
const parcial3 = 7; // Calificación del tercer parcial
const examenFinal = 9; // Calificación del examen final
const trabajoFinal = 10; // Calificación del trabajo final

const promedio = calcularPromedioFinal(parcial1, parcial2, parcial3, examenFinal, trabajoFinal);
console.log(`El promedio final es: ${promedio.toFixed(2)}`);