let radio= parseFloat(prompt("ingrese el radio de la circuferencias"))
const pi=3.1416

function longitud(pi,radio) {
    return(2*pi*radio)
    
}

function arear(pi,radio) {
    return(pi*radio**2)
}

let resultado = longitud(pi,radio);
let respuesta = arear(pi, radio);

 alert(resultado)
 alert(respuesta)
