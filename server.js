const http = require('http');
const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose()
const database = require("./database.js");
const sql = require("./public/SQL.js");
const PORT = process.env.PORT || 3000;
const fs = require('fs');
var path = require('path');
const server = http.createServer();
var cors = require('cors');
app.use(cors()); // Use this after the variable declaration
app.use(express.static('public')); //Used to allow style.css

let sql1 = sql.sql; //Using sql query from SQL.js


app.get("/", (req, res, next) => {
    database.db.all(sql1, (err, rows) => {
        if (err) {
            res.status(400).json({ message: err });
            console.log(err);
            return;
        }
        //console.log(rows.BidName);

        res.json({
            "message": "success",
            "data": rows
        })
    });
});

app.get('/bids', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//Error handling
app.all('*', function (req, res) {
    throw new Error("Bad request")
})
//Error Handling
app.use(function (e, req, res, next) {
    if (e.message === "Bad request") {
        res.status(400).json({ error: { msg: e.message, stack: e.stack } });
    }
});


app.use(function (req, res) {
    res.status(404).json({
        message: "working"
    });
});

//Listen for port
app.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT + "/bids")
});