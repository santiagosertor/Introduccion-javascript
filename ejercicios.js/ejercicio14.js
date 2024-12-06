let  base = parseFloat(prompt("escriba el area del rectangulo"))
let altura = parseFloat(prompt("escriba la altura del rectangulo"))

function triangleArea(base, altura) {
    return base * altura /2
  }
  
  let resultado = triangleArea(base , altura)

  alert(`el area del rectangulo es: ${resultado}`);