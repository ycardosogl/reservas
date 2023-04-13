var express = require('express');
var router = express.Router();
var funcionarios = require('../controllers/funcionarios.js');

router.get('/', funcionarios.getFuncionarios);
router.post('/', funcionarios.createFuncionarios);
router.get('/:id', funcionarios.getoneFuncionarios);
router.put('/:id', funcionarios.updateFuncionarios);
router.delete('/:id', funcionarios.deleteFuncionarios);


module.exports = router;