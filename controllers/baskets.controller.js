const Datos = require('../models/datos.model');
const DatoSolicitud = require('../models/datos.model');
const mongoose = require('mongoose')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"

//Simple version, without validation or sanitation

exports.create = function (req, res) {
	console.log('API PostBasketsDB')
    let datos = new Datos(
        {
					  base:       req.body.base,
						coleccion:  req.body.coleccion,
            id:         req.body.id,
            dato:       req.body.dato
        }
    );

		MongoClient.connect(url, function(err, db) {
     if (err) throw err;
       var dbo = db.db(datos.base);
       dbo.collection(datos.coleccion).insertOne(datos, function(err, res) {
       if (err) throw err;
          console.log("Dato inserted");
          db.close();


    datos.save(function (err) {
        if (err) {
        	res.status(400).json({ message: err.message })
            return next(err);
        }
        res.send('Datos agregados EXITOSAMENTE!')
    })

	});
});



};


var base
var coleccion
//Get Datos
exports.details = function (req, res) {
	 console.log('API Get details')

	 base     = req.body.base
	 coleccion = req.body.coleccion
	  //let datoSolicitud = new DatoSolicitud(
    // {
 		//			base:       req.body.base,
 	//				coleccion:  req.body.coleccion,
 	//		}
 	 //  );

	 MongoClient.connect(url, function(err, db) {
     if (err) throw err;
        var dbo = db.db(base);
        dbo.collection(coleccion).find({}).toArray(function(err, result) {
     if (err) throw err;
        console.log(result);
        db.close();
     });
   });

};


exports.delete= function (req, res) {
    console.log('API Delete colecion');
	  base     = req.body.base
	  coleccion = req.body.coleccion

		MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db(base);
	  dbo.collection(coleccion).drop(function(err, delOK) {
	    if (err) throw err;
	    if (delOK) console.log("Collection deleted");
	    db.close();
	  });
	});

};




exports.createCollecion = function (req, res) {
	base     = req.body.base
	coleccion = req.body.coleccion

  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
  });

};



exports.updateDatoOne = function (req, res) {
	console.log('API Update')
	  base       = req.body.base
	  coleccion  = req.body.coleccion
    //var datoV  = req.body.datoU
	//	var datoN  = req.body.datoN


		MongoClient.connect(url, function(err, db) {
			if (err) throw err;
				 var dbo = db.db(base);
				 dbo.collection(coleccion).updateOne("hola","hola2" ,function (err,res){
					 if(err) throw err;
					 console.log('one dato updated');
					db.close();
				});
		});
};


exports.deleteDatos = function (req, res) {
    Datos.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Datos borrados EXITOSAMENTE!.');
    })
};
