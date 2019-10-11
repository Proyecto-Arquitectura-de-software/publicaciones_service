const mysql  = require ("mysql");
const express = require ("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const PeopleRoutes = require("./routes/products");

var app = express();
app.use(bodyParser.json());

app.use("/products", PeopleRoutes);



app.listen(3000);