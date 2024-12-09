// Función para ingresar las notas y procesarlas
function procesarNotas() {
    // Pedir al usuario la cantidad de alumnos
    const cantidadAlumnos = parseInt(prompt("Ingresa la cantidad de alumnos: "), 10);
    
    // Validar que la cantidad de alumnos sea un número positivo
    if (isNaN(cantidadAlumnos) || cantidadAlumnos <= 0) {
      console.log("Por favor ingresa una cantidad válida de alumnos.");
      return;
    }
  
    // Inicializar las variables para las notas
    let notaAlta = -1;
    let notaBaja = 101;
    let maximo100 = 0;
    let rangoA = 0;
    let rangoB = 0;
    let rangoC = 0;
    let rangoD = 0;
  
    // Ingresar las notas de cada alumno y procesarlas
    for (let i = 0; i < cantidadAlumnos; i++) {
      let nota = parseInt(prompt(`Ingresa la nota del alumno ${i + 1} (entre 1 y 100): `), 10);
  
      // Validar que la nota esté entre 1 y 100
      if (isNaN(nota) || nota < 1 || nota > 100) {
        console.log("La nota debe estar entre 1 y 100. Intenta de nuevo.");
        i--; // Decrementar el contador para que el alumno vuelva a ingresar su nota
        continue;
      }
  
      // Actualizar la nota alta y la nota baja
      if (nota > notaAlta) {
        notaAlta = nota;
      }
      if (nota < notaBaja) {
        notaBaja = nota;
      }
  
      // Contar cuántos obtuvieron la máxima nota de 100
      if (nota === 100) {
        maximo100++;
      }
  
      // Clasificar las notas en los rangos solicitados
      if (nota >= 90) {
        rangoA++;
      } else if (nota >= 80) {
        rangoB++;
      } else if (nota >= 70) {
        rangoC++;
      } else if (nota >= 60) {
        rangoD++;
      }
    }
  
    // Mostrar los resultados
    console.log("Resultados:");
    console.log(`Nota alta: ${notaAlta}`);
    console.log(`Nota baja: ${notaBaja}`);
    console.log(`Alumnos con nota 100: ${maximo100}`);
    console.log(`Alumnos con calificación "a" (90-100): ${rangoA}`);
    console.log(`Alumnos con calificación "b" (80-89): ${rangoB}`);
    console.log(`Alumnos con calificación "c" (70-79): ${rangoC}`);
    console.log(`Alumnos con calificación "d" (60-69): ${rangoD}`);
  }
  
  // Llamar a la función para ejecutar el programa
  procesarNotas();
  