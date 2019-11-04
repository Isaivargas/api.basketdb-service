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

//test
router.get('/baskets', baskets_controller.test);

//Post Datos
router.post('/baskets/create', baskets_controller.create_datos);

//Get Datos
router.get('/baskets/:id/details', baskets_controller.details_datos);

//Update Datos
router.put('/baskets/:id/update', baskets_controller.update_datos);


router.delete('/baskets/:id/delete', baskets_controller.delete_datos);

module.exports = router;
