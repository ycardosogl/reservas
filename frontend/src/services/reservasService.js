import axios from 'axios';

var reservasService = {  
  getReservas: async () => {
    var reservaAPI = axios.get('http://localhost:5001/reservas/');
    return await reservaAPI;
  },

  getOneReservas: async (id) => {
    var reservaAPI = axios.get('http://localhost:5001/reservas/'+id);
    return await reservaAPI;
  },

  deleteReservas: async (id) => {
    var reservaAPI = axios.delete('http://localhost:5001/reservas/'+id );
    return await reservaAPI;
  },

  createReservas: async (reserva) => {
    var reservaAPI = axios.post('http://localhost:5001/reservas/',reserva );
    return await reservaAPI;
  },

  updateReservas: async (reserva,id) => {
    var reservaAPI = axios.put('http://localhost:5001/reservas/'+id,reserva );
    return await reservaAPI;
  },


  
};





export default reservasService;