let cad ="soy programador de Software"
function invertirCadena(cad) {
    let separarCadena = cad.split(""); 
    let invertirArreglo = separarCadena.reverse(); 
    let unirArreglo = invertirArreglo.join("");
    return unirArreglo; 
}
let resultado = invertirCadena(cad)
alert(`la palabra ingresada es ${cad}`)
alert(`la palabra invertida es ${resultado}`)
