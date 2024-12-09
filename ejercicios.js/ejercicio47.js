let num1 = parseFloat(prompt("Introduce el primer número a calcular:"));
let num2 = parseFloat(prompt("Introduce el segundo número a calcular:"));
let num3 = parseFloat(prompt("Introduce el tercer número a calcular:"));

if (num1 === num2 && num1 === num3) {
    alert("Los tres números son iguales.");
}
else if (num1 > num2 && num1 > num3) {
    alert("El mayor de los tres números es: " + num1);
}
else if (num2 > num1 && num2 > num3) {
    alert("El mayor de los tres números es: " + num2);
}
else if (num3 > num1 && num3 > num2) {
    alert("El mayor de los tres números es: " + num3);
}
else if (num1 < num2 && num1 < num3) {
    alert("El menor de los tres números es: " + num1);
} else if (num2 < num1 && num2 < num3) {
    alert("El menor de los tres números es: " + num2);
} else {
    alert("El menor de los tres números es: " + num3);
}