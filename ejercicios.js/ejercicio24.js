const regex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;

const ejemplo = "2.3e-1";
console.log(regex.test(ejemplo)); // Resultado: true