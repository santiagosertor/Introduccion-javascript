let pagos= parseInt(prompt("ingresa el valor que has consumido"))
let descuento =0.15
function valortotal(pagos) {
    if (pagos > 130000) {
        let total= pagos*descuento;
        alert(`el descuento se aplciara correctamnete ya que es mayor a 130.000`)
        return total;
    }else{
        alert(`el valor no se aplica descuento ya que es menor su pago es ${pagos}`)
    }
}

let resultado =  valortotal(pagos)
alert(resultado)

