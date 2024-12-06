let a = parseInt(prompt("ingrese el valor de A"));  
let b = parseInt(prompt("ingresar el valor de B"));  
let c = parseInt(prompt("ingresar el valor de C"));  

function calcularVolumenElipsoide(a, b, c) {
    const pi = Math.PI;  
    let volumen = (4 / 3) * pi * a * b * c;  // Fórmula para el volumen del elipsoide
    return volumen;
}

let volumen = calcularVolumenElipsoide(a, b, c);

console.log("El volumen del elipsoide es: " + volumen.toFixed(2) + " unidades cúbicas");
