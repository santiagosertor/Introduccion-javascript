let area = parseInt(prompt("ingrese area de (m2) que desea pedir"))
let precio = parseFloat(prompt("ingresar el valor que se va a cobrar al cliente"))

function valordelapintura(area, precio) {
    return area * precio
}

let resultado = valordelapintura(area,precio);

alert(`el valor de la pintura que deseas es ${resultado}`)