
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"


var dataBase
exports.create_db = function (req, res) {
	console.log('API PostBaskets Data Base ')
	 dataBase = req.params.id;  
     MongoClient.connect(url, function(err, db) {
          if (err) throw err;
              var dbo = db.db(dataBase);  /*--Test = Mongodb  name-*/
              //creacion de la coleccion :
             console.log('Basket creado Exitosamente!')
           dbo.createCollection("colecionInicial", function(err, res) {
              if (err) throw err;
               console.log("Collection created!");
              db.close();
             });

          });  

};






exports.create_collections = function (req, res) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017"+dataBase

	console.log('API PostBaskets Data Base ')     
     MongoClient.connect(url, function(err, db) {
          if (err) throw err;
              var dbo = db.db(dataBase);  /*--Test = Mongodb  name-*/
              //creacion de la coleccion :
              dbo.createCollection("name2", function(err, res) {
              if (err) throw err;
               console.log("Collection created!");
              db.close();
             });
          });  

};
