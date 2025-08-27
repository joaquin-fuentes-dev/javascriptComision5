async function obtenerProductos() {
  try {
    const api_url = "https://fakestoreapi.com/products";
    const resultado = await fetch(api_url);
    const data = await resultado.json();
    return data;
  } catch (error) {
    console.log(error);
    alert("Error al cargar productos");
  }
}

function mostrarProductos(productos) {
  const contenedorProductos = document.getElementById("contenedorProductos");
  productos.forEach((producto) => {
    const { title, image, description } = producto;
    contenedorProductos.innerHTML += `<div class="col">
           <div class="card">
             <img src="${image}" class="card-img-top" alt="..." />
             <div class="card-body">
               <h5 class="card-title">${title}</h5>
               <p class="card-text">
                ${description}
               </p>
             </div>
           </div>
         </div>`;
  });
}

window.addEventListener("DOMContentLoaded", async () => {
  const productos = await obtenerProductos();
  mostrarProductos(productos);
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
//                <p class="card-text">
//                 ${description}
//                </p>
//              </div>
//            </div>
//          </div>`;
//   });
// };
// obtenerProductos();
