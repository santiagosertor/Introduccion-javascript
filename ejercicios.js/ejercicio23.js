function crvertirvelocidad(kmh) {
       const conversionFactor= 5/18;
       return kmh * conversionFactor;
}

const velocidadKmh = 90;
const velocidadMS = 
convertirvelocidad(velocidadKmh);

alert(`la velocidad de ${velocidadKmh} km/h equivale a ${velocidadMS.toFixed(2)} m/s`);