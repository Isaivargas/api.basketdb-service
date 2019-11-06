var express = require('express');
var router = express.Router();
const path = require('path');

var about = require('./about')
/* GET users listing. */
//router.get('/baskets', function(req, res, next) {
//   console.log('API BasketsDB')
//   res.sendFile('/Users/isai_vargas/Documents/Node-api/myapp/views' +'/index.html');
//});

const basketsController = require('../controllers/baskets.controller');

//test

//Post Datos
router.post('/baskets/create', basketsController.create);

//Get Datos
router.get('/baskets/details', basketsController.details);

//Delete colection
router.delete('/baskets/delete', basketsController.delete);

router.put('/baskets/update', basketsController.updateDatoOne);

//Update Datos
//router.put('/baskets/update', basketsController.update);


//router.delete('/baskets/delete.datos/:id', basketsController.delete_datos);

module.exports = router;
