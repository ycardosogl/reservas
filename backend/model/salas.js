const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/reservas', { useNewUrlParser: true});

var Schema = mongoose.Schema;

const salas = new Schema ({

    tipo        : { type:String, required: true},
    numero      : { type:Number, required: true},
    capacidade  : { type:Number, required: true},
    valor       : { type:Number, required: true},
    img         : { type:String, required: true},
    descriçao   : { type:String, required: true}
})

const SalasModel = mongoose.model('salas', salas);


module.exports = {SalasModel};