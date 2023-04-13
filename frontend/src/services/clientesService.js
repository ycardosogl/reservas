import axios from 'axios';

var clientesService = {  
  getClientes: async () => {
    var clienteAPI = axios.get('http://localhost:5001/clientes/');
    return await clienteAPI;
  },

  getOneClientes: async (id) => {
    var clienteAPI = axios.get('http://localhost:5001/clientes/'+id);
    return await clienteAPI;
  },

  deleteClientes: async (id) => {
    var clienteAPI = axios.delete('http://localhost:5001/clientes/'+id );
    return await clienteAPI;
  },

  createClientes: async (cliente) => {
    var clienteAPI = axios.post('http://localhost:5001/clientes/',cliente );
    return await clienteAPI;
  },

  updateClientes: async (cliente,id) => {
    var clienteAPI = axios.put('http://localhost:5001/clientes/'+id,cliente );
    return await clienteAPI;
  },


  
};





export default clientesService;