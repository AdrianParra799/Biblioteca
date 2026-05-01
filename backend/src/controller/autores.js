const autoresService = require("../service/autores");

async function listarAutores(req, res) {
  const autores = await autoresService.obtenerAutores();
  res.json(autores);
}

async function obtenerAutor(req, res) {
  const id = req.params.id;

  const autor = await autoresService.obtenerAutorPorId(id);

  if (!autor) {
    return res.status(404).json({
      error: "Autor no encontrado"
    });
  }

  res.json(autor);
}

async function crearAutor(req, res) {
  const nuevoAutor = {
    nombre: req.body.nombre,
    nacionalidad: req.body.nacionalidad,
    anio_nacimiento: req.body.anio_nacimiento
  };

  const id = await autoresService.crearAutor(nuevoAutor);

  res.status(201).json({
    id: id,
    ...nuevoAutor
  });
}

async function actualizarAutor(req, res) {
  const id = req.params.id;

  const autorActualizado = {
    nombre: req.body.nombre,
    nacionalidad: req.body.nacionalidad,
    anio_nacimiento: req.body.anio_nacimiento
  };

  const filasActualizadas = await autoresService.actualizarAutor(id, autorActualizado);

  if (filasActualizadas === 0) {
    return res.status(404).json({
      error: "Autor no encontrado"
    });
  }

  res.json({
    id: Number(id),
    ...autorActualizado
  });
}

async function eliminarAutor(req, res) {
  const id = req.params.id;

  const filasEliminadas = await autoresService.eliminarAutor(id);

  if (filasEliminadas === 0) {
    return res.status(404).json({
      error: "Autor no encontrado"
    });
  }

  res.status(204).send();
}

module.exports = {
  listarAutores,
  obtenerAutor,
  crearAutor,
  actualizarAutor,
  eliminarAutor
};