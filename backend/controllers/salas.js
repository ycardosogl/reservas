const salas = require('../model/salas.js')

exports.getSalas = async(req, res) => {
    try {
        
        res.status(201).json(await salas.SalasModel.find())
    }catch(error) {
        res.status(500).json({ message: error.message });

    }
}

exports.getoneSalas = async (req, res) => {   
  try {;
    res.status(201).json(await salas.SalasModel.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createSalas = async (req, res) => {   
    try {;
      res.status(201).json(await salas.SalasModel.create(req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.updateSalas = async (req, res) => {   
    try {;
      res.status(201).json(await salas.SalasModel.findByIdAndUpdate(req.params.id,req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.deleteSalas = async (req, res) => {   
    try {;
      res.status(201).json(await salas.SalasModel.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

