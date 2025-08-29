let productosGlobales = [];

async function obtenerProductos() {
  try {
    const api_url = "https://fakestoreapi.com/products";
    const resultado = await fetch(api_url);
    const data = await resultado.json();
    return data;
  } catch (error) {
    console.log(error);
    alert("Error al cargar productos");
  } finally {
    // Aquí puedes realizar acciones que se ejecuten siempre, como ocultar un spinner de carga
  }
}

function mostrarProductos(productos) {
  const contenedorProductos = document.getElementById("contenedorProductos");
  contenedorProductos.innerHTML = "";
  // mostrar mensaje cuando no se encuentre ningun producto
  if (productos.length === 0) {
    contenedorProductos.innerHTML += `
        <p class="text-center"> No se encontraron productos </p>
      `;
    return;
  }
  productos.forEach((product) => {
    contenedorProductos.innerHTML += `
        <div class="col">
          <div class="card h-100">
            <img src="${product.image}" alt="${product.title}" style="height:200px; width:100%; object-fit:cover; border-bottom:1px solid #eee;">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <product class="card-text" style="
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
              ">${product.description}</product>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">Categoría: ${product.category}</small><br>
              <strong>$${product.price}</strong>
              <button class="btn btn-outline-primary btn-sm mt-2 btn-fav" data-id="${product.id}">Agregar a favoritos</button>
            </div>
          </div>
        </div>
      `;
  });
  document.querySelectorAll(".btn-fav").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const id = parseInt(event.target.getAttribute("data-id"));
      const producto = productos.find((producto) => producto.id === id);
      // agregar a favoritos
      agregarAFavoritos(producto);
    });
  });
}

function agregarAFavoritos(producto) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  // antes de agegar a favoritos deberia ver que no exista ese producto en el localstorage

  if (favoritos.some((favorito) => favorito.id === producto.id)) {
    alert("El producto ya existe en localstorage");
  } else {
    favoritos.push(producto);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    alert("Producto agregado a favoritos");
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  const productos = await obtenerProductos();
  mostrarProductos(productos);

  //   AGREGAR FUNCIONALIDAD DE BUSCADOR
  const buscador = document.getElementById("buscador");
  buscador.addEventListener("input", (event) => {
    const texto = event.target.value.trim();
    const productosFiltrados = productos.filter((producto) =>
      producto.title.toLowerCase().includes(texto.toLowerCase())
    );
    mostrarProductos(productosFiltrados);
  });
});

// let products = [];

// const obtenerProductos = async () => {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products");
//     products = await response.json();
//     await listarProductos();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const listarProductos = async (params) => {
//   const contenedorProductos = document.getElementById("contenedorProductos");

//   products.forEach((product) => {
//     const { title, image, description } = product;

//     contenedorProductos.innerHTML += `<div class="col">
//            <div class="card">
//              <img src="${image}" class="card-img-top" alt="..." />
//              <div class="card-body">
//                <h5 class="card-title">${title}</h5>
//                <product class="card-text">
//                 ${description}
//                </product>
//              </div>
//            </div>
//          </div>`;
//   });
// };
// obtenerProductos();
