function calcularSueldo(nombre, horasTrabajo, pagoPorHora) {
    const sueldo = horasTrabajo * pagoPorHora;
    return { nombre, sueldo };
}

// Solicitar los datos al usuario
const nombreEmpleado = prompt("Ingrese el nombre del empleado:");
const horasTrabajo = parseFloat(prompt("Ingrese la cantidad de horas trabajadas:"));
const pagoPorHora = parseFloat(prompt("Ingrese el pago por hora:"));

// Calcular el sueldo
const resultado = calcularSueldo(nombreEmpleado, horasTrabajo, pagoPorHora);

// Mostrar el resultado
alert(`Empleado: ${resultado.nombre}\nSueldo total: $${resultado.sueldo.toFixed(2)}`);