let saldo = parseInt(prompt("ingresar el saldo correspondiente ")); 
function calcularInteres(saldoInicial) {
    let interes;
    let saldoFinal;

    if (saldoInicial < 100000) {
        interes = saldoInicial * 0.03;
    } else {
        interes = saldoInicial * 0.04; 
    }

    saldoFinal = saldoInicial + interes;

    alert("Saldo Inicial: $" + saldoInicial);
    alert("Interés Pagado: $" + interes);
    alert("Saldo Final: $" + saldoFinal);
}

calcularInteres(saldo)