const num1 = parseInt(prompt("esciba primer numero"))
const num2 = parseInt(prompt("esciba segundo numero"))


function sumarNumeros(num1, num2) {
    return num1 + num2;
  }
  
  function restarNumeros(num1, num2) {
    return num1 - num2;
  }
  
  function multiplicarNumeros(num1, num2) {
    return num1 * num2;
  }
  
  function dividirNumeros(num1, num2) {
    if (num2 !== 0) {
    return num1 / num2;
    } else {
    return "No se puede dividir por cero";
    }
  }
  
    switch (operacion) {
    case "sumar":
    resultado = sumarNumeros(num1, num2);
    break;
    case "restar":
    resultado = restarNumeros(num1, num2);
    break;
    case "multiplicar":
    resultado = multiplicarNumeros(num1, num2);
    break;
    case "dividir":
    resultado = dividirNumeros(num1, num2);
    break;
    default:
    resultado = "Operación no válida";
    }
  
    

  let resultado = calcular();

  console.log(resultado);
  