const prompt = require ("prompt-sync")();

//calculadora de propinas

function calcularPropina(total) {
    let porcentaje = 16; 
    let propina = total * (porcentaje / 100);
    let montoFinal = total + propina;
    return {
        totalCuenta: total,
        porcentaje: porcentaje,
        propina: propina,
        montoFinal: montoFinal
    };
}

let totalCuenta = parseFloat(prompt("Ingrese el total de la cuenta:"));
let resultado = calcularPropina(totalCuenta);


console.log("Cuenta: $" + resultado.totalCuenta.toFixed(2));
console.log("Propina (" + resultado.porcentaje + "%): $" + resultado.propina.toFixed(2));
console.log("Total a pagar: $" + resultado.montoFinal.toFixed(2));

//toFixed(2) sirve para mostrar el número con 2 decimales, como 55000.00.
