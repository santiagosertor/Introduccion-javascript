let contraseña = prompt("ingrese la contraseña")
let validacion =/[a-z]+[A-Z]/


function buscar (validacion,contraseña){
    if (contraseña.includes(validacion)){
        alert("la contraseña coincide");
    }else{
        alert("la contraseña no coincide");
    }
    
}

console.log(buscar(validacion , contraseña))

