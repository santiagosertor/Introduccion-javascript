let tipoEmpleado = prompt("ingresar el tipo de empleados (Escribe 'planta' o 'administrativo'):");
let horasTrabajadas = parseFloat(prompt("Introduce el total de horas trabajadas:"));
let pagoPorHora;

if (tipoEmpleado.toLowerCase() === 'planta') {
    pagoPorHora = 20000;  
} else if (tipoEmpleado.toLowerCase() === 'administrativo') {
    pagoPorHora = 10000; 
} else {
    alert("Tipo de empleado no válido. Por favor ingrese 'planta' o 'administrativo'.");
}
if (pagoPorHora) {
    let pagoTotal = pagoPorHora * horasTrabajadas;
    alert("El pago total es: $" + pagoTotal.toFixed(2));
}
