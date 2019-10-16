const mysql  = require ("mysql");
const express = require ("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const PublicationsRoutes = require("./routes/products");

var app = express();
app.use(bodyParser.json());

app.use("/products", PublicationsRoutes);



app.listen(3400);