

function calcularVelocidad(distanciaKm, tiempoMinutos) {

    if (isNaN(distanciaKm) || isNaN(tiempoMinutos) || distanciaKm <= 0 || tiempoMinutos <= 0) {
      console.log("Por favor, ingrese valores válidos y positivos.");
      return;
    }
  
    // Convertir distancia a metros y tiempo a segundos
    let distanciaMetros = distanciaKm * 1000; // convertir kilómetros a metros
    let tiempoSegundos = tiempoMinutos * 60;  // convertir minutos a segundos
  
    // Calcular la velocidad
    let velocidad = distanciaMetros / tiempoSegundos;
  
    // Mostrar el resultado
    console.log(`La velocidad del proyectil es: ${velocidad.toFixed(2)} m/s`);
  }
  
  // Datos del problema
  let distancia = 2;  // en kilómetros
  let tiempo = 5;     // en minutos
  
  // Llamar a la función para calcular la velocidad
 let resultado= calcularVelocidad(distancia, tiempo);
  
  
  alert(`el calculo de velocidad es: ${resultado}`)