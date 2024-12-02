let usuario = prompt("ingrese su nombre")
let edad = parseInt(prompt("ingrese su edad"))
let ingresos= parseFloat(prompt("cuantos ingreses mensuales tiene?"))

if (edad > 16 && ingresos >16) {
    alert("es mayor de 16 años debe tributar 1000 mensuales")
}else{
    alert("el usuairo es menor de edad no debe tributar")
}

