const clientes = require('../model/clientes.js')

exports.getClientes = async(req, res) => {
    try {
        
        res.status(201).json(await clientes.ClientesModel.find())
    }catch(error) {
        res.status(500).json({ message: error.message });

    }
}

exports.getoneClientes = async (req, res) => {   
  try {;
    res.status(201).json(await clientes.ClientesModel.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createClientes = async (req, res) => {   
    try {;
      res.status(201).json(await clientes.ClientesModel.create(req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.updateClientes = async (req, res) => {   
    try {;
      res.status(201).json(await clientes.ClientesModel.findByIdAndUpdate(req.params.id,req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.deleteClientes = async (req, res) => {   
    try {;
      res.status(201).json(await clientes.ClientesModel.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.getClientescpf = async (req, res) => {   
    try {;
      res.status(201).json(await clientes.ClientesModel.find({cpf:`${req.params.cpf}`}));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

