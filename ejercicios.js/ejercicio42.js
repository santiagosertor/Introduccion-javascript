let libros =10000;
let cuadernos = 7550;
let lapicero = 5550;

function valordelmonto(libros,cuadernos,lapicero) {
    const librostotal= libros*cuadernos;
    const cuadernototal= cuadernos*lapicero;
    const totallapiceros= lapicero*libros;

    let totalmonto = librostotal + cuadernototal + totallapiceros;
    return totalmonto;
}

let resultado = valordelmonto(libros,cuadernos,lapicero)

alert(`el valor total de los libros es ${libros}`)
alert(`el valor total del cuaderno es ${cuadernos}`)
alert(`el valor total de los lapiceros es ${lapicero}`)
alert(`valor del monto es ${resultado
    
}`)