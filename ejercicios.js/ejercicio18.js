let a = parseInt(prompt("ingrese el numero A")); 
let b = parseInt(prompt("ingrese el numero B")); 
let c = parseInt(prompt("ingrese el numero C")); 

function evaluarExpresion(a, b, c) {
    let resultado = (a + 7 * c) / (b + 2 - a) + 2 * b;
    return resultado;
}

let resultado = evaluarExpresion(a, b, c);
alert("El resultado de la expresión es: " + resultado);
