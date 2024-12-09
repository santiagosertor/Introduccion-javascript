let producto1 = parseFloat(prompt("Introduce el precio del primer producto:"));
let producto2 = parseFloat(prompt("Introduce el precio del segundo producto:"));
let producto3 = parseFloat(prompt("Introduce el precio del tercer producto:"));
let producto4 = parseFloat(prompt("Introduce el precio del cuarto producto:"));
let producto5 = parseFloat(prompt("Introduce el precio del quinto producto:"));

let subtotal = producto1 + producto2 + producto3 + producto4 + producto5;
const IVA = 0.19;
let iva = subtotal * IVA;
let total = subtotal + iva;

alert("Subtotal: $" + subtotal.toFixed(2));
alert("IVA (19%): $" + iva.toFixed(2));
alert("Total: $" + total.toFixed(2));
