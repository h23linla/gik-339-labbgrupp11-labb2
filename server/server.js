const express = require("express");
const cors = require("cors");
const server = express();
const sqlite3 = require("sqlite3").verbose();

server.use(express.json()).use(express.urlencoded({ extended: false }));
server.use(cors());

server.get("/users", (req, res) => {
    const method = req.method;
    const url = req.url;
    const db = new sqlite3.Database("./gik339-labb2.db");

    const sql = "SELECT * FROM users";
    db.all(sql, (err, rows) => {
        res.send(rows);
    });

    //res.send(`Du gjorde en ${method} förfrågan till url:en ${url}`)
});

server.put("/users", (req, res) => {
    const name = req.params.name;
    const id = req.params.id;
    const url = req.url;
    const body = req.body;

    res.send({ name, id, url, body });
});


server.listen(3000, () =>
    console.log("Servern körs.")
);

server
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });