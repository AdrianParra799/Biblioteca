const express = require("express");
const cors = require("cors");
const crearTablas = require("./database/init");
const autoresRoute = require("./route/autores");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.use("/autores", autoresRoute);

app.get("/", (req, res) => {
  res.json({
    message: "API de Biblioteca funcionando correctamente"
  });
});

crearTablas().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
  });
});