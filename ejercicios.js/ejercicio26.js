function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32; // Fórmula de conversión
}

// Ejemplo de uso
const temperaturaCelsius = 25; // Grados Celsius a convertir
const temperaturaFahrenheit = celsiusAFahrenheit(temperaturaCelsius);

alert(`${temperaturaCelsius}°C equivalen a ${temperaturaFahrenheit.toFixed(2)}°F.`);