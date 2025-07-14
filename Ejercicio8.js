function convertirMoneda(monto, monedaDestino) {
  let resultado;

  if (monedaDestino === "USD") {
    resultado = monto / 3900; // Suponiendo 1 USD ≈ 3900 COP
    console.log(` ${monto} COP equivalen a $${resultado.toFixed(2)} USD`);
  } else if (monedaDestino === "EUR") {
    resultado = monto / 4200; // Suponiendo 1 EUR ≈ 4200 COP
    console.log(` ${monto} COP equivalen a €${resultado.toFixed(2)} EUR`);
  } else {
    console.log(" Moneda no válida. Usa 'USD' o 'EUR'.");
  }
}
let montoCOP = 100000;               // Monto que quieres convertir
let moneda = "USD";                  // Moneda destino: "USD" o "EUR"
convertirMoneda(montoCOP, moneda);   // Ejecuta la función