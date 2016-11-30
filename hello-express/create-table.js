const knex = require("./db.js");

knex.schema.createTable("guest", (table) => {
    table.increments("guestid");
    table.string("guestname");
}).then(()=> {
    console.log("Table guest created!");
    process.exit(0);
}).catch((err) => {
    console.log(err);
    process.exit(1);
})