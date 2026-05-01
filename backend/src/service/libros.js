const database = require("../configuration/database");

async function obtenerLibros() {
  return await database("libros")
    .join("autores", "libros.autor_id", "autores.id")
    .select(
      "libros.id",
      "libros.titulo",
      "libros.genero",
      "libros.anio_publicacion",
      "libros.autor_id",
      "autores.nombre as autor_nombre"
    );
}

async function obtenerLibroPorId(id) {
  return await database("libros")
    .join("autores", "libros.autor_id", "autores.id")
    .select(
      "libros.id",
      "libros.titulo",
      "libros.genero",
      "libros.anio_publicacion",
      "libros.autor_id",
      "autores.nombre as autor_nombre"
    )
    .where("libros.id", id)
    .first();
}

async function obtenerLibrosPorAutor(autorId) {
  return await database("libros")
    .where({ autor_id: autorId })
    .select("*");
}

async function crearLibro(libro) {
  const ids = await database("libros").insert(libro);
  return ids[0];
}

async function actualizarLibro(id, libro) {
  return await database("libros")
    .where({ id: id })
    .update(libro);
}

async function eliminarLibro(id) {
  return await database("libros")
    .where({ id: id })
    .del();
}

module.exports = {
  obtenerLibros,
  obtenerLibroPorId,
  obtenerLibrosPorAutor,
  crearLibro,
  actualizarLibro,
  eliminarLibro
};