const valorDolar = 0.00023;
const valorEuro = 0.00021;  
let pesos = parseFloat(prompt("Introduce la cantidad en pesos:"));
let dolares = pesos * valorDolar;
let euros = pesos * valorEuro;
alert(pesos + " pesos equivalen a " + dolares.toFixed(2) + " dólares.");
alert(pesos + " pesos equivalen a " + euros.toFixed(2) + " euros.");