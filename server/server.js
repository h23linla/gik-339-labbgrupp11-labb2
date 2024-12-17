const express = require("express");
const server = express();
const sqlite3 = require("sqlite3").verbose();

server.use(express.json()).use(express.urlencoded({ extended: false }));

server.get("/", (req, res) => {
    const method = req.method;
    const url = req.url;
    const db = new sqlite3.Database("./gik339-labb2.db");

    const sql = "SELECT * FROM users";
    db.all(sql, (err, rows) => {
        res.send(rows);
    });

    //res.send(`Du gjorde en ${method} förfrågan till url:en ${url}`)
});

server.post("/", (req, res) => {
    const body = req.body;
    res.status(500).send("test");
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