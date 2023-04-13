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
import clientesService from '../services/clientesService';



function Clientes() {
  
  const { id } = useParams();
  
  const [cliente, setFormData] = useState({});

  const history = useNavigate();

  useEffect(() => {
      async function fetchFormData () {
      
      try {
        const response = await clientesService.getOneClientes(id);
        //console.log('id =' + id);
        //const response = await axios.get(`http://localhost:5001/clientes/${id}`);
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
            
              
              await clientesService.createClientes(cliente);
              alert('incluido com sucesso!'); 
          }
          else {
               
               await clientesService.updateClientes(cliente,id);
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
      setFormData({ ...cliente, [name]: value });
    };

  
  return (    

    <Container className='contclientes' >
      <Row>
        <Cabecalho />
      </Row>
      
      <Form onSubmit={handleSubmit} className='caixaclientes'>
       <div className='todoclient'>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label> CPF: <Form.Control  type="text" name="cpf" value={cliente.cpf} onChange={handleChange}/> </Form.Label>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label> NOME: <Form.Control  type="text" name="nome" value={cliente.nome} onChange={handleChange}/> </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> EMAIL: <Form.Control type="text" name="email" value={cliente.email} onChange={handleChange} /></Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> CEP:  <Form.Control type="text" name="cep" value={cliente.cep} onChange={handleChange} /></Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> TELEFONE: <Form.Control type="text" name="telefone" value={cliente.telefone} onChange={handleChange} /></Form.Label>
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

export default Clientes;