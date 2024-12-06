let radio= parseFloat(prompt("ingrese la longitud  de la esfera"))
const pi = Math.PI

function longitud(radio,pi) {
    return(4.0/3.0)*pi*(radio**3)
}

let resultado= longitud(radio,pi);

alert(`la longitud de de la esfera es ${resultado}`)