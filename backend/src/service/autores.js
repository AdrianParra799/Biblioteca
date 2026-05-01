const database = require("../configuration/database");

async function obtenerAutores() {
  return await database("autores").select("*");
}

async function obtenerAutorPorId(id) {
  return await database("autores")
    .where({ id: id })
    .first();
}

async function crearAutor(autor) {
  const ids = await database("autores").insert(autor);
  return ids[0];
}

async function actualizarAutor(id, autor) {
  return await database("autores")
    .where({ id: id })
    .update(autor);
}

async function eliminarAutor(id) {
  return await database("autores")
    .where({ id: id })
    .del();
}

module.exports = {
  obtenerAutores,
  obtenerAutorPorId,
  crearAutor,
  actualizarAutor,
  eliminarAutor
};