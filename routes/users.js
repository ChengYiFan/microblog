var express = require('express');
var router = express.Router();

/* Get users listing */
router.get('/', function(req, res){
	res.send('respond with a resource');
});

module.exports = router;
