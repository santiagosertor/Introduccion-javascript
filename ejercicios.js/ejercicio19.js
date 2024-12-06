function calcularCilindro(radio, altura) {
    const pi = Math.PI; 

    let area = 2 * pi * radio * (radio + altura);

    let volumen = pi * Math.pow(radio, 2) * altura;

    return {
        area: area,
        volumen: volumen
    };
}

let radio = 5;  // Radio de la base en unidades
let altura = 10;  // Altura del cilindro en unidades

let resultados = calcularCilindro(radio, altura);

console.log("Área superficial del cilindro: " + resultados.area.toFixed(2) + " unidades cuadradas");
console.log("Volumen del cilindro: " + resultados.volumen.toFixed(2) + " unidades cúbicas");
