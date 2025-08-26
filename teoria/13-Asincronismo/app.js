const personajes = [
  {
    id: 1,
    nombre: "Homero Simpson",
    edad: 39,
  },
  {
    id: 2,
    nombre: "Marge Simpson",
    edad: 36,
  },
  {
    id: 3,
    nombre: "Bart Simpson",
    edad: 10,
  },
];

const getDatos = () => {
  return new Promise((resolve, reject) => {
    if (personajes.length != 3) {
      reject(new Error("Promesa fallida"));
    }
    setTimeout(() => {
      resolve(personajes);
    }, 3000);
  });
};

// getDatos()
//   .then((datos) => console.log(datos))
//   .catch((error) => console.log(error.message))
//   .finally(() => console.log("Promesa finalizada"));

const api_url = "https://dragonball-api.com/apicharacters?limit=10";

async function ejecutar() {
  try {
    // codigo cuando la promesa sale bien
    const resultado = await fetch("https://www.holacosa.com/");
    const data = await resultado.json();
    console.log(data.items);
  } catch (error) {
    // codigo cuando la promesa sale mal
    console.log(error.message);
  } finally {
    // codigo que siempre se ejecuta
    console.log("Codigo que siempre se ejecuta");
  }
}

ejecutar();
