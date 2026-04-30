import axios from "axios";

const API_LIBROS = "http://localhost:8080/libros";
const API_AUTORES = "http://localhost:8080/autores";

const formularioLibro = document.getElementById("formularioLibro");
const libroId = document.getElementById("libroId");
const titulo = document.getElementById("titulo");
const genero = document.getElementById("genero");
const anioPublicacion = document.getElementById("anioPublicacion");
const autorId = document.getElementById("autorId");
const tablaLibros = document.getElementById("tablaLibros");
const botonCancelar = document.getElementById("botonCancelar");

async function cargarAutores() {
  const respuesta = await axios.get(API_AUTORES);
  const autores = respuesta.data;

  autorId.innerHTML = '<option value="">Selecciona un autor</option>';

  autores.forEach((autor) => {
    const opcion = document.createElement("option");
    opcion.value = autor.id;
    opcion.textContent = autor.nombre;
    autorId.appendChild(opcion);
  });
}

async function cargarLibros() {
  const respuesta = await axios.get(API_LIBROS);
  const libros = respuesta.data;

  tablaLibros.innerHTML = "";

  libros.forEach((libro) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${libro.titulo}</td>
      <td>${libro.genero}</td>
      <td>${libro.anio_publicacion}</td>
      <td>${libro.autor_nombre}</td>
      <td>
        <button class="btn btn-warning btn-sm" data-id="${libro.id}" data-accion="editar">Editar</button>
        <button class="btn btn-danger btn-sm" data-id="${libro.id}" data-accion="eliminar">Eliminar</button>
      </td>
    `;

    tablaLibros.appendChild(fila);
  });
}

function limpiarFormulario() {
  libroId.value = "";
  titulo.value = "";
  genero.value = "";
  anioPublicacion.value = "";
  autorId.value = "";
}

function validarFormulario() {
  if (titulo.value.trim() === "") {
    alert("El título es obligatorio");
    return false;
  }

  if (genero.value.trim() === "") {
    alert("El género es obligatorio");
    return false;
  }

  if (anioPublicacion.value === "") {
    alert("El año de publicación es obligatorio");
    return false;
  }

  if (autorId.value === "") {
    alert("Debes seleccionar un autor");
    return false;
  }

  return true;
}

formularioLibro.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!validarFormulario()) {
    return;
  }

  const libro = {
    titulo: titulo.value,
    genero: genero.value,
    anio_publicacion: Number(anioPublicacion.value),
    autor_id: Number(autorId.value)
  };

  if (libroId.value === "") {
    await axios.post(API_LIBROS, libro);
  } else {
    await axios.put(`${API_LIBROS}/${libroId.value}`, libro);
  }

  limpiarFormulario();
  await cargarLibros();
});

tablaLibros.addEventListener("click", async (event) => {
  const boton = event.target;

  if (boton.dataset.accion === "editar") {
    const id = boton.dataset.id;
    const respuesta = await axios.get(`${API_LIBROS}/${id}`);
    const libro = respuesta.data;

    libroId.value = libro.id;
    titulo.value = libro.titulo;
    genero.value = libro.genero;
    anioPublicacion.value = libro.anio_publicacion;
    autorId.value = libro.autor_id;
  }

  if (boton.dataset.accion === "eliminar") {
    const id = boton.dataset.id;
    const confirmado = confirm("¿Seguro que quieres eliminar este libro?");

    if (confirmado) {
      await axios.delete(`${API_LIBROS}/${id}`);
      await cargarLibros();
    }
  }
});

botonCancelar.addEventListener("click", () => {
  limpiarFormulario();
});

async function iniciar() {
  await cargarAutores();
  await cargarLibros();
}

iniciar();