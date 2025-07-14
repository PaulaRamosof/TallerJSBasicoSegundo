function calcularPromedio(notas) {
  let suma = 0;

  for (let i = 0; i < notas.length; i++) {
    suma += notas[i]; // sumamos cada nota
  }

  let promedio = suma / notas.length;
  return promedio.toFixed(2); // redondeamos a 2 decimales
}

let misNotas = [4.5, 3.8, 5.0, 4.2];
let resultado = calcularPromedio(misNotas);

console.log("Tu promedio es:", resultado); // Muestra: 4.38