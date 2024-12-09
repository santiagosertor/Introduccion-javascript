let num1 = parseFloat(prompt("Introduce el primer número:"));
let num2 = parseFloat(prompt("Introduce el segundo número:"));
let num3 = parseFloat(prompt("Introduce el tercer número:"));
let mayor = num1;

if (num2 > mayor) {
    mayor = num2; 
}
if (num3 > mayor) {
    mayor = num3; 
}

alert("El mayor de los tres números es: " + mayor);
