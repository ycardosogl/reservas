const funcionarios = require('../model/funcionarios.js')

exports.getFuncionarios = async(req, res) => {
    try {
        
        res.status(201).json(await funcionarios.FuncionariosModel.find())
    }catch(error) {
        res.status(500).json({ message: error.message });

    }
}

exports.getoneFuncionarios = async (req, res) => {   
  try {;
    res.status(201).json(await funcionarios.FuncionariosModel.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createFuncionarios = async (req, res) => {   
    try {;
      res.status(201).json(await funcionarios.FuncionariosModel.create(req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.updateFuncionarios = async (req, res) => {   
    try {;
      res.status(201).json(await funcionarios.FuncionariosModel.findByIdAndUpdate(req.params.id,req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.deleteFuncionarios = async (req, res) => {   
    try {;
      res.status(201).json(await funcionarios.FuncionariosModel.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

