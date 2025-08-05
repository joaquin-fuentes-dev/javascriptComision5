function saludar(nombre) {
  console.log(`Hola, ${nombre}`);
}

function procesarEntradaUsuario(callback) {
  const nombre = "Joaquín";
  callback(nombre);
}

// procesarEntradaUsuario(saludar);

setTimeout(function () {
  console.log("Hola mundo");
}, 5000); // Milisegundos hasta que se ejecuta la funcion callback

const frutas = ["manzana", "pera", "banana"];

//  for (let index = 0; index < frutas.length; index++) {
//    const element = frutas[index];
//    console.log(element);
//  }

// nombres.forEach((indice, nombre) =>
//   console.log("nombre:", nombre, "indice:", indice)
// );

const numeros = [1, 2, 3, 4];

const numerosAlCuadrado = numeros.map((numero) => numero * numero);

// console.log(numeros);
// console.log(numerosAlCuadrado);

const edades = [18, 25, 188, 350, 16, 30, 12];

const mayoresDeEdad = edades.filter((edad) => edad >= 25);

const mayorDeEdad = edades.find((edad) => edad >= 100);

const indiceDelMayorDeEdad = edades.findIndex((edad) => edad >= 100);

const nombres = ["Sofia", "Ana", "Joaquín", "Pedro"];
// console.log(nombres);
nombres.sort();

// console.log(nombres);

edades.sort((a, b) => a - b).reverse();
console.log(edades);
