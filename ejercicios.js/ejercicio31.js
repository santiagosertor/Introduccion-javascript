// Función para calcular la distancia entre dos puntos
function calcularDistancia(x1, y1, x2, y2) {
    // Usamos Math.pow() para elevar al cuadrado y Math.sqrt() para la raíz cuadrada
    const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distancia;
}

// Solicitar las coordenadas de los dos puntos al usuario
const x1 = parseFloat(prompt("Ingrese la coordenada x1 del primer punto:"));
const y1 = parseFloat(prompt("Ingrese la coordenada y1 del primer punto:"));
const x2 = parseFloat(prompt("Ingrese la coordenada x2 del segundo punto:"));
const y2 = parseFloat(prompt("Ingrese la coordenada y2 del segundo punto:"));

// Calcular la distancia
const distancia = calcularDistancia(x1, y1, x2, y2);

// Mostrar el resultado
alert(`La distancia entre los puntos es: ${distancia.toFixed(2)} unidades.`);