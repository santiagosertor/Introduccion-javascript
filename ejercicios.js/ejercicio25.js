function calcularPrecioFinal(precio) {
    const descuento = precio * 0.10; // Calcula el 10% de descuento
    const precioFinal = precio - descuento; // Precio final después del descuento
    return { descuento, precioFinal };
}

// Ejemplo de uso
const precioMedicamento = 1000; // Precio ingresado
const resultado = calcularPrecioFinal(precioMedicamento);

alert(`Precio original: $${precioMedicamento}`);
alert(`Descuento aplicado: $${resultado.descuento}`);
alert(`Precio final: $${resultado.precioFinal}`);