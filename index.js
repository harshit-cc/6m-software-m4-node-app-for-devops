require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

const print = require("./controller");

const home1 = require("./controllerHome");

const postUser = require("./controllerPost");

app.get("/", print);
app.get("/home", home1);
app.post("/user", postUser);

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
