var express = require('express');
var router = express.Router();
var clientes = require('../controllers/clientes.js');

router.get('/', clientes.getClientes);
router.post('/', clientes.createClientes);
router.get('/:id', clientes.getoneClientes);
router.put('/:id', clientes.updateClientes);
router.delete('/:id', clientes.deleteClientes);


module.exports = router;