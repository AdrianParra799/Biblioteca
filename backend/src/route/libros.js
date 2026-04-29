const express = require("express");
const librosController = require("../controller/libros");

const router = express.Router();

router.get("/", librosController.listarLibros);
router.get("/:id", librosController.obtenerLibro);
router.post("/", librosController.crearLibro);
router.put("/:id", librosController.actualizarLibro);
router.delete("/:id", librosController.eliminarLibro);

module.exports = router;