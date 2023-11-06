var express = require('express');
var router = express.Router();
const registroControllers = require("../controllers/registro.c");

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('ESTAMOS EN REGISTRO');
});

router.post('/', function(req, res, next){
    const body = req.body;
    registroControllers.agregar(body)
    .then((resultado) => {
        console.log("se agrego correctamente :)")
        res.status(200).send('se registró :)');
    })
    .catch((err) => {
        console.log("error")
        res.status(404).res('error')
    })
})

module.exports = router;