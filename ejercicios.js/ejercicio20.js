let a = parseInt(prompt("ingresar el numero de A"));  
let b = parseInt(prompt("ingresar el numero de B")); 
let c = parseInt(prompt("ingresar el numero de C"));  

function calcularRaices(a, b, c) {
    let discriminante = Math.pow(b, 2) - 4 * a * c; // Calculamos el discriminante

    if (discriminante > 0) {
        // Dos raíces reales distintas
        let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return { raiz1: x1, raiz2: x2 };
    } else if (discriminante === 0) {
        // Una raíz real doble
        let x = -b / (2 * a);
        return { raiz1: x, raiz2: x };
    } else {
        // No hay raíces reales, las raíces son complejas
        return "No hay raíces reales";
    }
}

let resultado = calcularRaices(a, b, c);

if (typeof resultado === "string") {
    alert(resultado); // Si es un mensaje de error (raíces complejas)
} else {
    alert("Las raíces de la ecuación son:");
    alert("Raíz 1: " + resultado.raiz1);
    alert("Raíz 2: " + resultado.raiz2);
}
