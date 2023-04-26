var express = require('express');
var router = express.Router();
var reservas = require('../controllers/reservas');

//consultar reservas teste
router.get('/', reservas.getReservas);
// buscar novo numero de reserva
//router.get('/novonumero', reservas.getNumeroReserva);
//consultar reservas em um perido
router.get('/consultadatas/', reservas.consultaDatasReservas);
//consultar salas com reservas
router.get('/consultasalas/', reservas.consultaSalasReservas);
// sala disponivel
//router.get('/disponivel', reservas.disponivelReserva);
// criar a reserva
router.post('/', reservas.createReserva);
// alterar sala ou periodo da reserva
router.put('/:id', reservas.updateReserva);
// busca uma reserva 
router.get('/:id', reservas.getOneReservas);
// cancelar a reserva
router.put('/cancelar/:id', reservas.cancelarReserva);

// criar a reserva
//router.post('/seq', seqController.seq);

module.exports = router;