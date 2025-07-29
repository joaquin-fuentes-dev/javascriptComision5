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

let frutas = ["manzana", "banana", "naranja", "uva"];

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

let existe = frutas.includes("manzana");

console.log(existe);
