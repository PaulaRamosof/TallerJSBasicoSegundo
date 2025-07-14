function filtrarUsuarios(usuarios, edadMinima) {
  let resultado = []; // Aquí guardamos los que cumplen

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].edad > edadMinima) {
      resultado.push(usuarios[i]); // Lo agregamos si cumple la edad
    }
  }

  return resultado;
}
const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 17 },
  { nombre: "Carlos", edad: 30 },
  { nombre: "Sara", edad: 18 }
];

let mayoresDe18 = filtrarUsuarios(usuarios, 18);
console.log(" Usuarios mayores de 18:", mayoresDe18);