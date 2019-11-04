const Datos = require('../models/datos.model');
const mongoose = require('mongoose')

//Simple version, without validation or sanitation
exports.test = function (req, res ) {
	console.log('API BasketsDB')
    res.send('Greetings from the  Basket Test controller!');
};


//Post Datos a una coleccion
exports.create_datos = function (req, res) {
	console.log('API PostBasketsDB')
    let datos = new Datos(
        {
            id: req.body.id,
            dato: req.body.dato
        }
    );

    datos.save(function (err) {
        if (err) {
        	res.status(400).json({ message: err.message })
            return next(err);
        }
        res.send('Datos agregados EXITOSAMENTE!')
    })
};


//Get Datos
exports.details_datos = function (req, res) {
	console.log('API Get details')
    Datos.findById(req.params.id, function (err, datos) {
        if (err) return next(err);
        res.send(datos);
    })
};


exports.update_datos = function (req, res) {
    Datos.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, datos) {
        if (err) return next(err);
        res.send('Datos actualizados EXITOSAMENTE!.');
    });
};


exports.delete_datos = function (req, res) {
    Datos.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Datos borrados EXITOSAMENTE!.');
    })
};