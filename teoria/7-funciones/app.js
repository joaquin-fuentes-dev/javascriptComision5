// let numero1 = 5;
// let numero2 = 10;

// let numero3 = 20;
// let numero4 = 25;

// let resultado = numero3 + numero4;

// console.log(resultado);

// creo la funcion
function saludarNombre(nombre, edad) {
  let cosa = "HOla soy una cosa";
  //   console.log("Hola", nombre, "edad:", edad);
  console.log(cosa);
}
saludarNombre("Joaquin", 25);

function sumar(numeroA, numeroB) {
  let resultado = numeroA + numeroB;
}

// const restar = function (a, b) {
//   return a - b;
// };

const restar = function (a, b) {
  return a - b;
};

// llamo a la funcion
let resultadoDeLafuncion = restar(10, 3);

// console.log(resultadoDeLafuncion);

sumar(10, 20);

// funcion de flecha
const multiplicar = (a, b) => a * b;

// console.log(multiplicar(4, 5));

// funcion IIFE
(function () {
  console.log("Esto se ejecuta automáticamente");
})();

let texto = "25";
// texto todo en mayuscula???
if (texto === "") {
  console.error("El texto esta vacio");
} else if (texto === texto.toUpperCase()) {
  console.log("El texto esta en mayuscula");
} else if (texto === texto.toLowerCase()) {
  console.log("El texto esta en minuscula");
} else {
  console.log("El texto esta combinado");
}
// todo en minuscula???

// mayusculas y minusculas combinadas??

// EJERCICIO 3 DEL TP 3
// Dificultad:  🟢🟡🔴

// 3- Escribir un script que simule el lanzamiento de dos dados.
// Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6
//  para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos
//  dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50
//  veces esta operación.

// dado1 = 1 ,2 ,3 ,4 ,5,6
// dado2 = 1,2,3,4,5,6
// suma de los 2 dados = 4 + 5

// 1er intento = 9
// 2do intento = 2
// 3er intento = 8
// 4to intento = 12
// 5to intento = 8

// 2,3,4,5,6,7,8,9,10,11,12

let apariciones = [0, 0, 4, 3, 7, 2, 0, 1, 0, 0, 0, 0, 0];

for (let index = 0; index < 50; index++) {
  // aqui empieza el for
  let dado1 = Math.random();
  let dado2 = Math.random();
  let suma = dado1 + dado2;

  apariciones[suma] = apariciones[suma] + 1;
}
