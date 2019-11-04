var express = require('express');
var router = express.Router();



router.get('/about',function (req, res) {
	console.log('about')
  res.send('this is the index for bar')
});


module.exports = router;