var express = require('express');
var router = express.Router();
var salas = require('../controllers/salas.js');

router.get('/', salas.getSalas);
router.post('/',salas.createSalas);
router.get('/:id', salas.getoneSalas);
router.put('/:id', salas.updateSalas);
router.delete('/:id', salas.deleteSalas);


module.exports = router;