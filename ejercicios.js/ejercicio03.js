const num1 = parseFloat(prompt("Introduce el primer número:"));
const num2 = parseFloat(prompt("Introduce el segundo número (divisor):"));
function dividirNumeros() {
    if (num2 === 0) {
       alert("¡Error! No se puede dividir por cero.");
    } else {
        const resultado = num1 / num2;
        alert(`El resultado de la división es: ${resultado}`);
    }
}

dividirNumeros();

