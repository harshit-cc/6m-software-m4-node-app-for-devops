require("dotenv").config();
const express = require("express");
const app = express();
const mysql = require("mysql");

app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
  database: "test",
});

const print = require("./controller");

const home1 = require("./controllerHome");

const postUser = require("./controllerPost");

app.get("/", print);
app.get("/home", home1);
app.post("/user", postUser);

app.get("/user", (req, res) => {
  const userId = req.query.id;
  const query = `SELECT * FROM users WHERE id = ${userId}`;

  connection.query(query, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
