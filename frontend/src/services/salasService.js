import axios from 'axios';

var salasService = {  
  getSalas: async () => {
    var salaAPI = axios.get('http://localhost:5001/salas/');
    return await salaAPI;
  },

  getOneSalas: async (id) => {
    var salaAPI = axios.get('http://localhost:5001/salas/'+id);
    return await salaAPI;
  },

  deleteSalas: async (id) => {
    var salaAPI = axios.delete('http://localhost:5001/salas/'+id );
    return await salaAPI;
  },

  createSalas: async (sala) => {
    var salaAPI = axios.post('http://localhost:5001/salas/',sala );
    return await salaAPI;
  },

  updateSalas: async (sala,id) => {
    var salaAPI = axios.put('http://localhost:5001/salas/'+id,sala );
    return await salaAPI;
  },


  
};





export default salasService;