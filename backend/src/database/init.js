const database = require("../configuration/database");

async function crearTablas() {
  const existeTablaAutores = await database.schema.hasTable("autores");

  if (!existeTablaAutores) {
    await database.schema.createTable("autores", (table) => {
      table.increments("id").primary();
      table.string("nombre").notNullable();
      table.string("nacionalidad").notNullable();
      table.integer("anio_nacimiento").notNullable();
    });

    console.log("Tabla autores creada");
  }

  const existeTablaLibros = await database.schema.hasTable("libros");

  if (!existeTablaLibros) {
    await database.schema.createTable("libros", (table) => {
      table.increments("id").primary();
      table.string("titulo").notNullable();
      table.string("genero").notNullable();
      table.integer("anio_publicacion").notNullable();
      table.integer("autor_id").unsigned().notNullable();

      table.foreign("autor_id").references("id").inTable("autores");
    });

    console.log("Tabla libros creada");
  }
}

module.exports = crearTablas;