const mysql  = require ("mysql");
const express = require ("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const PublicationsRoutes = require("./routes/products");
const cors = require('cors');


var app = express();


app.use(cors());
app.use(bodyParser.json());

app.use("/products", PublicationsRoutes);



app.listen(3000);