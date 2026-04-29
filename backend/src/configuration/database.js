const knex = require("knex");

const database = knex({
  client: "sqlite3",
  connection: {
    filename: "./biblioteca.db"
  },
  useNullAsDefault: true
});

module.exports = database;