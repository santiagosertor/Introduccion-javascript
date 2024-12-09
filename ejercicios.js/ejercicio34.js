// Solicitar los datos al usuario
const radio = parseFloat(prompt("Ingrese el radio de la base del depósito (en metros):"));
const altura = parseFloat(prompt("Ingrese la altura del depósito (en metros):"));
const caudal = parseFloat(prompt("Ingrese el caudal (en litros por segundo):"));

// Calcular el volumen del depósito
const volumen = Math.PI * Math.pow(radio, 2) * altura; // Volumen en litros

// Calcular el tiempo estimado de llenado en segundos y luego convertirlo a minutos
const tiempoSegundos = volumen / caudal;
const tiempoMinutos = tiempoSegundos / 60;

// Mostrar el resultado
alert(`El tiempo estimado para llenar el depósito es: ${tiempoMinutos.toFixed(2)} minutos.`);