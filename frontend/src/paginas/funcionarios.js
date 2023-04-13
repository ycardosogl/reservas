import React, { useState, useEffect  } from 'react';
import { useParams, useNavigate} from "react-router-dom";
import axios from 'axios';
import { Container, Row  } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho/cabecalho';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './styles.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Rodape from '../componentes/footer/rodape';
import funcionariosService from '../services/funcionariosService'


function Funcionarios() {
  
  const { id } = useParams();
  
  const [funcionario, setFormData] = useState({});

  const history = useNavigate();

  useEffect(() => {
      async function fetchFormData () {
      
      try {
        const response = await funcionariosService.getOneFuncionarios(id);
       // console.log('id =' + id);
        //const response = await axios.get(`http://localhost:5001/funcionarios/${id}`);
        setFormData(response.data);      
        console.log('response ' + response.data);
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchFormData();
    },[id]); 

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        
        //const id = event.target._id.value;
        if (event.nativeEvent.submitter.name === "salvar") {
          alert(id);
          if (id === ':id') {
            
              
              await funcionariosService.createFuncionarios(funcionario);
              alert('incluido com sucesso!'); 
          }
          else {
            await funcionariosService.updateFuncionarios(funcionario,id);
              alert('alterado com sucesso!');
          }
        }
      } catch (error) {
        console.error(error);
      }
      history(-1);
    }

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...funcionario, [name]: value });
    };

  
  return (    

    <Container className='contfuncionarios' >
      <Row>
        <Cabecalho />
      </Row>
      
      <Form onSubmit={handleSubmit} className='caixafuncionarios'>
       <div className='todofuncio'>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label> CPF: <Form.Control  type="text" name="cpf" value={funcionario.cpf} onChange={handleChange}/> </Form.Label>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label> NOME: <Form.Control  type="text" name="nome" value={funcionario.nome} onChange={handleChange}/> </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> EMAIL: <Form.Control type="text" name="email" value={funcionario.email} onChange={handleChange} /></Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> CEP:  <Form.Control type="text" name="cep" value={funcionario.cep} onChange={handleChange} /></Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> TELEFONE: <Form.Control type="text" name="telefone" value={funcionario.telefone} onChange={handleChange} /></Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> FUNÇÃO: <Form.Control type="text" name="funcao" value={funcionario.funcao} onChange={handleChange} /></Form.Label>
      </Form.Group>
     
      
      


          
          <Button  variant="primary" type="submit" name="salvar">
            Salvar
          </Button>
         

          
          <Button  variant="primary" type="submit" name="cancelar">
            Cancelar
          </Button>
          
          
      </div>
      
    </Form>
    
    <Row>
      <Rodape/>
      </Row>
            
    </Container>
  );
}

export default Funcionarios;