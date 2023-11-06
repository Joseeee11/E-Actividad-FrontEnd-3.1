var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log("llegando señales");
  res.send( req.body );

});



module.exports = router;
