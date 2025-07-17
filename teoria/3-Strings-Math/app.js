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
let numeroMasBajo = Math.min(-55, 100, 25, 5, 7, 3, 9, 20);
let numeroMasAlto = Math.max(-55, 100, 25, 5, 7, 3, 9, 20);
let numeroRedondeadoHaciaAbajo = Math.floor(7.9999);
let numeroRedondeadoHaciaArriba = Math.ceil(7.1111);
let numeroRedondeadoNormal = Math.floor(7.5);
let numeroAleatorioEntre0Y1 = Math.random();

console.log(numeroMasBajo);
console.log(numeroMasAlto);
console.log(numeroRedondeadoHaciaAbajo);
console.log(numeroRedondeadoHaciaArriba);
console.log(numeroRedondeadoNormal);
console.log(numeroAleatorioEntre0Y1);
console.log(numeroAleatorioEntre0Y1 * 100);
console.log(Math.floor(numeroAleatorioEntre0Y1 * 100));
