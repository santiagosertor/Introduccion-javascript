let tipoMembresia = prompt("Introduce tu tipo de membresía (A, B o C):").toUpperCase();
let precioTotal = parseFloat(prompt("Introduce el precio total de tu compra:"));
let descuento = 0;

if (tipoMembresia === 'A') {
    descuento = 0.10;  
} else if (tipoMembresia === 'B') {
    descuento = 0.15;  
} else if (tipoMembresia === 'C') {
    descuento = 0.20;  
} else {
    alert("Tipo de membresía no válido. Por favor ingrese A, B o C.");
}
if (descuento > 0) {
    let valorDescuento = precioTotal * descuento;
    let precioConDescuento = precioTotal - valorDescuento;

    alert("Tipo de Membresía: " + tipoMembresia);
    alert("Descuento: $" + valorDescuento.toFixed(2));
    alert("Precio total con descuento: $" + precioConDescuento.toFixed(2));
}
