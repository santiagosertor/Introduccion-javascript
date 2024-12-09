// Definir los costos de los productos
const precioLlaveHexagonal = 11500;
const precioBomba = 1168000;
const precioCajaPernos = 87000;
const cantidadLlaves = 5;
const cantidadPernos = 3;
const dineroSobrante = 91000;

// Calcular el total gastado en cada producto
const totalLlaves = precioLlaveHexagonal * cantidadLlaves;
const totalBomba = precioBomba;
const totalPernos = precioCajaPernos * cantidadPernos;

// Calcular el dinero total que tenía
const dineroTotal = totalLlaves + totalBomba + totalPernos + dineroSobrante;

// Mostrar el resultado
alert(`El jefe de obra tenía inicialmente: $${dineroTotal}`);
