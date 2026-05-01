const express = require("express");
const autoresController = require("../controller/autores");
const librosController = require("../controller/libros");

const router = express.Router();

router.get("/", autoresController.listarAutores);
router.get("/:id/libros", librosController.listarLibrosPorAutor);
router.get("/:id", autoresController.obtenerAutor);
router.post("/", autoresController.crearAutor);
router.put("/:id", autoresController.actualizarAutor);
router.delete("/:id", autoresController.eliminarAutor);

module.exports = router;