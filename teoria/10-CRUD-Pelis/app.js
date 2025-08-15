let peliculasJSON = localStorage.getItem("peliculas");
let peliculas = JSON.parse(peliculasJSON) || [];

// Funcion para Agregar pelicula
function agregarPelicula() {
  const titulo = prompt("Ingrese el titulo de la pelicula");
  const director = prompt("Ingrese el nombre del director de la pelicula");
  const anio = parseInt(prompt("Ingrese el año de estreno de la pelicula"));
  const calificacion = parseFloat(
    prompt("Ingrese la calificación de la pelicula")
  );

  let nuevaPelicula = {
    id: Date.now(),
    titulo,
    director,
    anio,
    calificacion,
    // titulo: titulo,
    // director: director,
    // anio: anio,
    // calificacion: calificacion,
  };
  peliculas.push(nuevaPelicula);

  localStorage.setItem("peliculas", JSON.stringify(peliculas));
  console.log("✅ Película agregada:", nuevaPelicula); // Mostramos en consola
}

// Funcion para Listar peliculas
function listarPeliculas() {
  peliculas = JSON.parse(localStorage.getItem("peliculas"));
  console.log("🎬 Lista de películas:");
  peliculas.forEach((pelicula) => {
    const { director, titulo, calificacion, anio } = pelicula;
    console.log(
      `Director: ${director}, titulo: ${titulo}, calificacion: ${calificacion}, año: ${anio} `
    );
  });
}
// Funcion para Buscar pelicula por nombre
function buscarPeliPorNombre() {
  let nombreBuscado = prompt(
    "Ingrese el nombre de la pelicula que desea buscar"
  );
  let peliculaEncontrada = peliculas.find(
    (pelicula) => pelicula.titulo === nombreBuscado
  );
  console.log("🔎 Resultado de búsqueda:");
  console.log(peliculaEncontrada?.titulo);
}
// Funcion para Actualizar calificacion de una pelicula
function actualizarCalificacion() {
  let nombreDirector = prompt(
    "Ingrese el nombre del director de la pelicula que quiere editar"
  );
  let nuevaCalificacion = parseFloat(
    prompt("Ingrese la nueva calificacion de la pelicula")
  );
  peliculas = peliculas.map((pelicula) => {
    if (pelicula.director.trim() === nombreDirector.trim()) {
      // devolver todo lo que ya tenia la pelicula pero modificar solo su calificacion
      return { ...pelicula, calificacion: nuevaCalificacion };
    } else {
      return pelicula;
    }
  });
  localStorage.setItem("peliculas", JSON.stringify(peliculas));
}

// Funcion para Eliminar una pelicula

function eliminarPelicula() {
  let nombreDirector = prompt(
    "Ingrese el nombre del director de la pelicula que quiere editar"
  );
  // del listado buscamos una en particular
  let posicionDeLaPelicula = peliculas.findIndex(
    (pelicula) => pelicula.director === nombreDirector
  );
  // eliminar el elemento en la posicion ?????
  let peliculaEliminada = peliculas.splice(posicionDeLaPelicula, 1);
  localStorage.setItem("peliculas", JSON.stringify(peliculas));
  console.log("🗑️ Película eliminada:", peliculaEliminada[0].titulo);
}
// ESTO DEBEN HACER USTEDEES PARA LA CLASE SIGUIENTE!!!!!!
function guardarEnLocalStorage() {}

function obtenerDelLocalStorage() {}
// agregarPelicula();
// listarPeliculas();
// actualizarCalificacion("Lautaro", 10);
// listarPeliculas();

function mostrarMenu() {
  let entrar = true;
  while (entrar) {
    let opcion = prompt(
      "📽️ Bienvenido al CRUD de Películas\n\n" +
        "1️⃣ Agregar película\n" +
        "2️⃣ Listar películas\n" +
        "3️⃣ Buscar por nombre\n" +
        "4️⃣ Actualizar calificación\n" +
        "5️⃣ Eliminar película\n" +
        "6️⃣ Salir\n\n" +
        "Ingresá una opción:"
    );
    switch (opcion) {
      case "1":
        console.log("Agregar pelicula");
        agregarPelicula();
        break;
      case "2":
        console.log("Listar peliculas");
        listarPeliculas();
        break;
      case "3":
        console.log("Buscar pelicula por nombre");
        buscarPeliPorNombre();
        break;
      case "4":
        console.log("Editar calificacion de pelicula");
        actualizarCalificacion();
        break;
      case "5":
        console.log("Eliminar pelicula");
        eliminarPelicula();
        break;
      case "6":
        entrar = false;
        console.log("Salir");
        break;
      default:
        console.log("Opcion invalida");
        break;
    }
  }
}
mostrarMenu();

// peliculas = ["Titanes del pacifico", "titanic", "shrek"];
// const peliculasJSON = JSON.stringify(peliculas);
// localStorage.setItem("peliculas", peliculasJSON);
// const peliculasDelLocalStorageJSON = localStorage.getItem("peliculas");
// const peliculasDelLocalStorage = JSON.parse(peliculasDelLocalStorageJSON);
// console.log(peliculasDelLocalStorage);
