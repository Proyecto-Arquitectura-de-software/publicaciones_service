const express = require ("express");
const Router = express.Router();
const bodyParser = require('body-parser');
const mysqlConnection = require("../connection");

Router.use(bodyParser.json());

Router.get("/", (req,res)=>{
    mysqlConnection.query ("SELECT * FROM publications", (err, results)=>{
        if (err)
            {
                console.log(err);
            }
        else
            {
                res.send(results);
            }
    })

});


Router.get("/:publicationID", (req,res)=>{
    mysqlConnection.query ("SELECT * FROM publications WHERE publicationID ="+req.params.publicationID, (err, results)=>{
        if (err)
            {
                console.log(err);
            }
        else
            {
                res.send(results);
            }
    });

});



Router.delete("/:publicationID", (req,res)=>{
    mysqlConnection.query ("DELETE from publications WHERE publicationID="+ req.params.publicationID ,(err, results)=>{
        if (err)
            {
                console.log(err);
            }
        else
            {
                res.send('Eliminacion exitosa')
                
            }
    });

});

Router.post('/',(req, res) => {
    var postData  = req.body;
    mysqlConnection.query('INSERT INTO publications SET ?', postData, (err, results, fields)=> {
       if (err) throw error;
       res.send('Publicacion ingresada exitosamente');
     });
 });


 Router.put('/',(req, res) => {
    mysqlConnection.query('UPDATE `publications` SET `name`=?,`description`=?,`price`=?, `image`=? where `publicationID`=?', [req.body.name,req.body.description, req.body.price,req.body.image, req.body.publicationID],(error, results, fields)=> {
       if (error) throw error;
       res.send('Modificacion exitosa');
     });
 });


module.exports = Router;




