var express = require('express');
var router = express.Router();
const path = require('path');

var about = require('./about')
/* GET users listing. */
//router.get('/baskets', function(req, res, next) {
//   console.log('API BasketsDB')
//   res.sendFile('/Users/isai_vargas/Documents/Node-api/myapp/views' +'/index.html');
//});

const baskets_controller = require('../controllers/baskets.controller');


router.get('/baskets/login', baskets_controller.test);

//test
router.get('/baskets', baskets_controller.test);

//Post Datos
router.post('/baskets/create.datos', baskets_controller.create_datos);

//Get Datos
router.get('/baskets/details.datos/:id', baskets_controller.details_datos);

//Update Datos
router.put('/baskets/update.datos/:id', baskets_controller.update_datos);


router.delete('/baskets/delete.datos/:id', baskets_controller.delete_datos);

module.exports = router;
