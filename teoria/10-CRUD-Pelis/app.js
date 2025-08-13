let peliculas = [];

// Funcion para Agregar pelicula
function agregarPelicula(titulo, director, anio, calificacion) {
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

  console.log("✅ Película agregada:", nuevaPelicula); // Mostramos en consola
}

agregarPelicula("Ironman 2", "Franco Toledo", 2015, 9);
agregarPelicula("Titanes de pacifico", "Lautaro", 2010, 8.5);

// Funcion para Listar peliculas
function listarPeliculas() {
  console.log("🎬 Lista de películas:");
  peliculas.forEach((pelicula) => {
    const { director, titulo, calificacion, anio } = pelicula;
    console.log(
      `Director: ${director}, titulo: ${titulo}, calificacion: ${calificacion}, año: ${anio} `
    );
  });
}
listarPeliculas();
// Funcion para Buscar pelicula por nombre
function buscarPeliPorNombre(nombreBuscado) {
  let peliculaEncontrada = peliculas.find(
    (pelicula) => pelicula.titulo === nombreBuscado
  );
  console.log("🔎 Resultado de búsqueda:");
  console.log(peliculaEncontrada?.titulo);
}
buscarPeliPorNombre("Titanes");
// Funcion para Actualizar calificacion de una pelicula


// Funcion para Eliminar una pelicula

function eliminarPelicula(nombreDirector) {
  // del listado buscamos una en particular
  let posicionDeLaPelicula = peliculas.findIndex(
    (pelicula) => pelicula.director === nombreDirector
  );
  // eliminar el elemento en la posicion ?????
  let peliculaEliminada = peliculas.splice(posicionDeLaPelicula, 1);
  console.log("🗑️ Película eliminada:", peliculaEliminada[0].titulo);
  listarPeliculas();
}

eliminarPelicula("Lautaro");
