const knex = require("knex")({
    client: "sqlite3",
    connection: {
        filename: "./sql/bd.sqlite3"
    },
    useNullAsDefault: true
});

module.exports = knex;