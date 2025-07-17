// Metodos de String
let texto = "                         Hola Mundo          ";
let longitudText = texto.length;
let textoEnMayuscula = texto.toUpperCase();
let textoEnMinuscula = texto.toLowerCase();
let estaIncluido = texto.includes("Hola");
let posicionDelCaracter = texto.indexOf("M");
let textoExtraido = texto.slice(5, 10);
let textoRemplazado = texto.replace("Mundo", "Bruno");
let textoSinEspacios = texto.trim();

// Objeto Math (Números)
let numA = 10;
let numB = 27;
let numC = 100;
let numD = -5;

console.log(Math.min(-55, 100, 25, 5, 7, 3, 9, 20));
console.log(Math.max(-55, 100, 25, 5, 7, 3, 9, 20));
console.log(Math.floor(7.9999));
console.log(Math.ceil(7.1111));
console.log(Math.floor(7.5));
console.log(Math.random());
console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));
