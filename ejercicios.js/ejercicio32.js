// Función para aplicar el descuento
function aplicarDescuento(precio, descuento) {
    return precio * (1 - descuento / 100);
}

// Solicitar los precios de los 5 productos
const precios = [
    parseFloat(prompt("Ingrese el precio del primer producto:")),
    parseFloat(prompt("Ingrese el precio del segundo producto:")),
    parseFloat(prompt("Ingrese el precio del tercer producto:")),
    parseFloat(prompt("Ingrese el precio del cuarto producto:")),
    parseFloat(prompt("Ingrese el precio del quinto producto:"))
];

// Aplicar descuentos a los productos
const descuentos = [5, 5, 0, 2, 2]; // Descuentos: 5% a los primeros dos, 2% a los dos últimos
let totalCompra = 0;

for (let i = 0; i < precios.length; i++) {
    let descuento = descuentos[i];
    let precioFinal = descuento > 0 ? aplicarDescuento(precios[i], descuento) : precios[i];
    totalCompra += precioFinal;
    alert(`Producto ${i + 1}: Precio con descuento: $${precioFinal.toFixed(2)}`);
}

// Mostrar el total a pagar
alert(`El total a pagar es: $${totalCompra.toFixed(2)}`);