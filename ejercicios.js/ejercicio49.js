let  base = parseFloat(prompt("escriba el area del rectangulo"));
let altura = parseFloat(prompt("escriba la altura del rectangulo"));

function triangleArea(base, altura) {
    if (base >0 && altura >0) {
        return base * altura;
    }else{
        return "el numero es negativo o erroneo vuleve a intentar";
    }
}
let resultado = triangleArea(base , altura);
alert(resultado);
