// ----------------------------------------------
// 1️⃣ Contar cuántos números son mayores a 10
// ----------------------------------------------
let numeros1 = [5, 12, 8, 20, 3, 15];

let cantidadNumeros = 0;
for (let index = 0; index < numeros1.length; index++) {
  if (numeros1[index] > 10) {
    cantidadNumeros++;
  }
}

// console.log("La cantidad de numeros mayores a 10 fue de:", cantidadNumeros);

// ----------------------------------------------
// 2️⃣ Filtrar palabras con más de 4 letras
// ----------------------------------------------
let palabras = ["sol", "lunas", "estrella", "mar", "nubes"];
let palabrasFiltradas = [];
for (let index = 0; index < palabras.length; index++) {
  if (palabras[index].length > 4) {
    palabrasFiltradas += palabras[index];
  }
}
// console.log(palabrasFiltradas);

// ----------------------------------------------
// 3️⃣ Clasificar números como pares o impares
// ----------------------------------------------
let numeros2 = [0, 1, 4, 7, 10, 13, 16];

// for (let index = 0; index < numeros2.length; index++) {
//   const element = numeros2[index];
//   if (element % 2 === 0) {
//     console.log(element, "ES PAR");
//   } else {
//     console.log(element, "ES IMPAAAR");
//   }
// }

// ----------------------------------------------
// 4️⃣ Crear un array con los elementos string
// ----------------------------------------------
let datos = [true, "hola", 42, false, "mundo", 0, true];

let elementosBooleanos = [];

for (let index = 0; index < datos.length; index++) {
  const element = datos[index];
  //   console.log(typeof element);
  if (typeof element === "boolean") {
    elementosBooleanos.push(element);
  }
}

// console.log(elementosBooleanos);

// ----------------------------------------------
// 5️⃣ Mostrar los números negativos
// ----------------------------------------------
let valores = [3, -2, 5, -8, 0, 12, -1];

// for (let index = 0; index < valores.length; index++) {
//   const element = valores[index];
//   if (element > 0) {
//     console.log(element);
//   }
// }

for (const element of valores) {
  if (element < 0) {
    console.log(element);
  }
}
