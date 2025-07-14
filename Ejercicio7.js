function retirarDinero(saldo, monto) {
  if (monto <= saldo) {
    let nuevoSaldo = saldo - monto;
    console.log(`Retiro exitoso. Saldo restante: $${nuevoSaldo.toFixed(2)}`);
  } else {
    console.log("Fondos insuficientes. No se puede realizar el retiro.");
  }
}

let miSaldo = 100000;
retirarDinero(miSaldo, 30000); // Retiro exitoso
retirarDinero(miSaldo, 120000); // Fondos insuficientes