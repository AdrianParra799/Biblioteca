import axios from "axios";

const API_URL = "http://localhost:8080/autores";

const formularioAutor = document.getElementById("formularioAutor");
const autorId = document.getElementById("autorId");
const nombre = document.getElementById("nombre");
const nacionalidad = document.getElementById("nacionalidad");
const anioNacimiento = document.getElementById("anioNacimiento");
const tablaAutores = document.getElementById("tablaAutores");
const botonCancelar = document.getElementById("botonCancelar");

async function cargarAutores() {
  const respuesta = await axios.get(API_URL);
  const autores = respuesta.data;

  tablaAutores.innerHTML = "";

  autores.forEach((autor) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${autor.nombre}</td>
      <td>${autor.nacionalidad}</td>
      <td>${autor.anio_nacimiento}</td>
      <td>
        <button class="btn btn-warning btn-sm" data-id="${autor.id}" data-accion="editar">Editar</button>
        <button class="btn btn-danger btn-sm" data-id="${autor.id}" data-accion="eliminar">Eliminar</button>
      </td>
    `;

    tablaAutores.appendChild(fila);
  });
}

function limpiarFormulario() {
  autorId.value = "";
  nombre.value = "";
  nacionalidad.value = "";
  anioNacimiento.value = "";
}

function validarFormulario() {
  if (nombre.value.trim() === "") {
    alert("El nombre es obligatorio");
    return false;
  }

  if (nacionalidad.value.trim() === "") {
    alert("La nacionalidad es obligatoria");
    return false;
  }

  if (anioNacimiento.value === "") {
    alert("El año de nacimiento es obligatorio");
    return false;
  }

  return true;
}

formularioAutor.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!validarFormulario()) {
    return;
  }

  const autor = {
    nombre: nombre.value,
    nacionalidad: nacionalidad.value,
    anio_nacimiento: Number(anioNacimiento.value)
  };

  if (autorId.value === "") {
    await axios.post(API_URL, autor);
  } else {
    await axios.put(`${API_URL}/${autorId.value}`, autor);
  }

  limpiarFormulario();
  await cargarAutores();
});

tablaAutores.addEventListener("click", async (event) => {
  const boton = event.target;

  if (boton.dataset.accion === "editar") {
    const id = boton.dataset.id;
    const respuesta = await axios.get(`${API_URL}/${id}`);
    const autor = respuesta.data;

    autorId.value = autor.id;
    nombre.value = autor.nombre;
    nacionalidad.value = autor.nacionalidad;
    anioNacimiento.value = autor.anio_nacimiento;
  }

  if (boton.dataset.accion === "eliminar") {
    const id = boton.dataset.id;
    const confirmado = confirm("¿Seguro que quieres eliminar este autor?");

    if (confirmado) {
      await axios.delete(`${API_URL}/${id}`);
      await cargarAutores();
    }
  }
});

botonCancelar.addEventListener("click", () => {
  limpiarFormulario();
});

cargarAutores();