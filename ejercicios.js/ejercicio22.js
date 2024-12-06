let minutos = parseInt(prompt("ingresar el minutos de consumo"))
function calcularPagoLlamada(minutos) {
    const costoPorMinuto = 355; 
    const iva = 0.20; 
    let costoSinIva = costoPorMinuto * minutos;
    let ivaCalculado = costoSinIva * iva;
    let costoTotal = costoSinIva + ivaCalculado;
    return {
        costoSinIva: costoSinIva,
        iva: ivaCalculado,
        costoTotal: costoTotal
    }
}

let resultado = calcularPagoLlamada(minutos);
alert("Costo sin IVA: $" + resultado.costoSinIva.toFixed(2));
alert("IVA (20%): $" + resultado.iva.toFixed(2));
alert("Costo total (con IVA): $" + resultado.costoTotal.toFixed(2));
