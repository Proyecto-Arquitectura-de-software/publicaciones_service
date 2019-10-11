const mysql  = require ("mysql");

var mysqlConection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'publicationsDB',
    multipleStatements : true,


});


mysqlConection.connect ((err)=>{
    if(!err)
        {
            console.log("connected");
            var createDatabase = "CREATE DATABASE IF NOT EXISTS publicationsDB";
            mysqlConection.query(createDatabase, (err)=>{
                if(err)
                {
                    console.log("No se pudo crear la base de datos " + err.message);
                }
                else
                {
                    console.log("Base de datos creada exitosamente");
                }
            });
            mysqlConection.query("use publicationsDB");
            var createTable = "CREATE TABLE IF NOT EXISTS publications (publicationID INT AUTO_INCREMENT PRIMARY KEY, establishmentID INT, name VARCHAR(50), description VARCHAR(255), price FLOAT, image MEDIUMTEXT);";
        
            mysqlConection.query(createTable, function (err,result){
                if(err)
                    {
                        console.log("No se pudo crear la tabla " + err.message);

                    }
                else
                    {
                        console.log ("Tabla creada exitosamente")
                    }    
            });
        }
    else
        {
            console.log("Connection failed  " + err.message);
        }



});

module.exports = mysqlConection;