const inventario = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Zapatos", precio: 50 }
];

function buscarProducto(nombre, inventario) {
  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].nombre === nombre) {
      return inventario[i]; // 💡 Producto encontrado
    }
  }
  return null; // No encontrado
}

let resultado1 = buscarProducto("Zapatos", inventario);
console.log(resultado1); // Muestra: { nombre: "Zapatos", precio: 50 }

let resultado2 = buscarProducto("Gorra", inventario);
console.log(resultado2); // Muestra: null