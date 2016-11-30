const knex = require("./db.js");

if(!process.argv[3]) {
    console.log("ID did not specify");
    process.exit(0);
}

let [id, name] = [process.argv[3], process.argv[2]];

knex("guest").insert({
    guestid: id,
    guestname: name
}).then(() => {
    console.log(`guest ${name} added!`);
    process.exit(0);
}).catch((err) => {
    console.log(err);
    process.exit(1);
})