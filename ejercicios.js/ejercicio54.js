let num1 = parseFloat(prompt("Introduce el primer número (mayor que el segundo):"));
let num2 = parseFloat(prompt("Introduce el segundo número:"));

if (num1 > num2) {
    let resultado = num1 - num2;
    alert("El resultado de la resta es: " + resultado);
} else {
    alert("La operación no es posible, ya que el primer número no es mayor que el segundo.");
}
