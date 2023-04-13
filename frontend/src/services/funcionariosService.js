import axios from 'axios';

var funcionariosService = {  
  getFuncionarios: async () => {
    var funcionarioAPI = axios.get('http://localhost:5001/funcionarios/');
    return await funcionarioAPI;
  },

  getOneFuncionarios: async (id) => {
    var funcionarioAPI = axios.get('http://localhost:5001/funcionarios/'+id);
    return await funcionarioAPI;
  },

  deleteFuncionarios: async (id) => {
    var funcionarioAPI = axios.delete('http://localhost:5001/funcionarios/'+id );
    return await funcionarioAPI;
  },

  createFuncionarios: async (funcionario) => {
    var funcionarioAPI = axios.post('http://localhost:5001/funcionarios/',funcionario );
    return await funcionarioAPI;
  },

  updateFuncionarios: async (funcionario,id) => {
    var funcionarioAPI = axios.put('http://localhost:5001/funcionarios/'+id,funcionario );
    return await funcionarioAPI;
  },


  
};





export default funcionariosService;