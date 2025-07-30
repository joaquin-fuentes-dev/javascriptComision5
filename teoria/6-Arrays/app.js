// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….

// dibujar un numero que se muestre tantas eces como su valor

// for (let i = 1; i <= 50; i++) {
//   console.log(String(i).repeat(i));
// }

// for (let i = 1; i <= 30; i++) {
//   let linea = "";
//   for (let j = 1; j <= i; j++) {
//     linea = linea + i;
//   }
//   console.log(linea);
// }

// let arreglo = [3, 27, true, "Franco"];

// let alumnos = ["Joaquin", "Franco", "Bruno", "y tpdos le resto"];

// acceder y modificar un valor de un elemento
// frutas[1] = 27;
// console.log(frutas[1]);

// ver cantidad de elementos de un array
// console.log(frutas.length);

// agregar un elemento al final del array

// frutas.push("Ciruela");

// console.log(frutas);

// elimnar un elemento del final del array

// frutas.pop();

// Agregar un elemento AL COMIENZO del array

// frutas.unshift("Sandia");

// Eliminar el primer elemento de un array
// frutas.shift();

// Verifica si existe un elemento en un array

// let existe = frutas.includes("manzana");

// Verificar la posicion de un elemento

// let posicion = frutas.indexOf("loquesea");

// AggregateError, reemplazar o eliminar un elemento de una posicion especifica
// frutas.splice(3, 1, "Cosa");

// Hacer una copia de un Array, indicando que elementos quiero

// let nuevoArray = frutas.slice(0, 2);

// console.log(frutas);
// console.log(nuevoArray);

let frutas = ["manzana", "banana", "naranja", "uva"];
frutas.push("elemento2");
frutas.push("elemento3");
frutas.push("elemento4");

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// for (let fruta of frutas) {
//   console.log(fruta);
// }
