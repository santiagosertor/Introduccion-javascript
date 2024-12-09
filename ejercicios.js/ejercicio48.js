let figura = prompt("cual figuara quieres tu calcular pues: (Escriba T para Triángulo o C para Círculo):");
figura = figura.toUpperCase();
if (figura === 'T') {
    let base = parseFloat(prompt("Introduce la base del triángulo:"));
    let altura = parseFloat(prompt("Introduce la altura del triángulo:"));
    let areaTriangulo = (base * altura) / 2;

    alert("El área del triángulo es: " + areaTriangulo + " unidades cuadradas.");
}
else if (figura === 'C') {
    let radio = parseFloat(prompt("Introduce el radio del círculo:"));
    const PI = 3.1416;
    let areaCirculo = PI * radio * radio;
    alert("El área del círculo es: " + areaCirculo.toFixed(2) + " unidades cuadradas.");
}
else {
    alert("Opción no válida. Por favor, ingrese 'T' para Triángulo o 'C' para Círculo.");
}
