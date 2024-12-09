const regex = /"([^"\\]|\\.)*"/;
const testStrings = [
   '"hola mundo"',                  // Cadena válida simple
   '"esta es una \\"prueba\\""',    // Comillas escapadas dentro
   '"otra cadena con \\n"',         // Carácter escapado (\n)
   '"\\"cadena\\" con comillas"',   // Comillas escapadas al inicio y final
   '"cadena con \\\\ barra"',       // Barras escapadas (\\)
   'cadena sin comillas',           // No válida
   'cadena sin cierre',            // No válida
];

// Evaluamos cada cadena y mostramos si es válida o no
testStrings.forEach(str => {
  alert(`¿"${str}" es válida?`, regex.test(str));
});