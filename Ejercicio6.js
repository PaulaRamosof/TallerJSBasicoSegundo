function contarPalabras(texto) {
  let palabras = texto.trim().split(" ");
  return palabras.length;
}
let mensaje = "Hola Paula, estás creando magia con JavaScript";
let total = contarPalabras(mensaje);
console.log(` Este texto tiene ${total} palabras`);