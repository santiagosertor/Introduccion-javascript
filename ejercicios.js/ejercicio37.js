const cajas =25;
const peso=748;

function pesotransporte(peso,cajas) {
    return peso * cajas;
}

let resultado=pesotransporte(cajas,peso)

alert(`el resultado del peso del trasnporte es ${resultado}`);