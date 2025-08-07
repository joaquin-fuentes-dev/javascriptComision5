let computadora = {
  marca: "Hp",
  color: "Gris",
  procesador: "Ryzen 7",
  ram: 16,
};

// acceder a un valor de un objeto
// console.log(computadora.ram);
// console.log(computadora["color"]);

// Agregar una propiedad a un objeto
computadora.tamanioPantalla = 20;
computadora["precio"] = 1200000;

// modificar valor de una propiedad
computadora.marca = "Acer";

// eliminar una propiedad
delete computadora.tamanioPantalla;

// for (let propiedad in computadora) {
//   console.log(propiedad + ": " + computadora[propiedad]);
// }

let personas = ["Lucía", "Juan", "María"];

// console.log(personas);

// personas.forEach((persona, indice) => console.log(persona.nombre, indice));
// console.log(computadora);

// let nuevaComputadora = { ...computadora, anioFabricacion: 2025 };
// let nuevasPersonas = [...personas, "Joaquin"];

const persona = {
  nombre: "Lucía",
  edad: 30,
  profesion: "Desarrolladora",
};

// desestructuracion
// const { profesion, edad, nombre } = persona;
const { profesion, edad: edadAlumno, nombre: alumno } = persona;

// console.log("nombre:", alumno);
// console.log("edad:", edadAlumno);
// console.log("profesion:", profesion);

const edad = 15;

let esMayor = edad > 18 ? "Si es mayor" : "no es mayor";

console.log(esMayor);
