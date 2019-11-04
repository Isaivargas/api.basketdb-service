var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
   console.log('hola index')
   res.sendFile('/Users/isai_vargas/Documents/Node-api/myapp/views' +'/index.html');
});	


module.exports = router;
