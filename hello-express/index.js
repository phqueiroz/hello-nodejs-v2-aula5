const knex = require("./db.js");
const express = require("express");

const app = express();

app.get("/hello", function(req, res) {
    res.send("Hello world!");
});

app.get("/greet", (req, res) => {
    res.send(`Hello ${req.query.name}`);
});

app.get("/queryparams", (req, res) => {
    res.send("You seet it at console");
    console.log(req.query);
});

app.get("/client/:name/:team", (req, res) => {
    res.send(`Name: ${req.params.name} Team: ${req.params.team}`);
});

app.get("/optional(/:maybe)?", (req, res) => {
    if(req.params.maybe) {
        res.send(`Hello ${req.params.maybe}`);
    } else {
        res.send("Bye!");
    }
});

app.get("/guest", (req, res) => {
    knex("guest").select().then((ret) => {
        let i = ret.length;
        while(i--) {
            console.log(`ID: ${ret[i].guestid} \t\tNome: ${ret[i].guestname}`)
        }
        res.send("Look at console!");
    }).catch((err) => {
        console.log(err);
    });
});

app.listen(3000);