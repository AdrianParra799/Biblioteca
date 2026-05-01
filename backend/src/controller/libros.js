const librosService = require("../service/libros");
const autoresService = require("../service/autores");

async function listarLibros(req, res) {
  const libros = await librosService.obtenerLibros();
  res.json(libros);
}

async function obtenerLibro(req, res) {
  const id = req.params.id;

  const libro = await librosService.obtenerLibroPorId(id);

  if (!libro) {
    return res.status(404).json({
      error: "Libro no encontrado"
    });
  }

  res.json(libro);
}

async function listarLibrosPorAutor(req, res) {
  const autorId = req.params.id;

  const autor = await autoresService.obtenerAutorPorId(autorId);

  if (!autor) {
    return res.status(404).json({
      error: "Autor no encontrado"
    });
  }

  const libros = await librosService.obtenerLibrosPorAutor(autorId);
  res.json(libros);
}

async function crearLibro(req, res) {
  const nuevoLibro = {
    titulo: req.body.titulo,
    genero: req.body.genero,
    anio_publicacion: req.body.anio_publicacion,
    autor_id: req.body.autor_id
  };

  const autor = await autoresService.obtenerAutorPorId(nuevoLibro.autor_id);

  if (!autor) {
    return res.status(400).json({
      error: "El autor indicado no existe"
    });
  }

  const id = await librosService.crearLibro(nuevoLibro);

  res.status(201).json({
    id: id,
    ...nuevoLibro
  });
}

async function actualizarLibro(req, res) {
  const id = req.params.id;

  const libroActualizado = {
    titulo: req.body.titulo,
    genero: req.body.genero,
    anio_publicacion: req.body.anio_publicacion,
    autor_id: req.body.autor_id
  };

  const autor = await autoresService.obtenerAutorPorId(libroActualizado.autor_id);

  if (!autor) {
    return res.status(400).json({
      error: "El autor indicado no existe"
    });
  }

  const filasActualizadas = await librosService.actualizarLibro(id, libroActualizado);

  if (filasActualizadas === 0) {
    return res.status(404).json({
      error: "Libro no encontrado"
    });
  }

  res.json({
    id: Number(id),
    ...libroActualizado
  });
}

async function eliminarLibro(req, res) {
  const id = req.params.id;

  const filasEliminadas = await librosService.eliminarLibro(id);

  if (filasEliminadas === 0) {
    return res.status(404).json({
      error: "Libro no encontrado"
    });
  }

  res.status(204).send();
}

module.exports = {
  listarLibros,
  obtenerLibro,
  listarLibrosPorAutor,
  crearLibro,
  actualizarLibro,
  eliminarLibro
};