import React, { useState, useEffect  } from 'react';
import { useParams, useNavigate} from "react-router-dom";
import axios from 'axios';
import { Container, Row  } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho/cabecalho';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './styles.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Rodape from '../componentes/footer/rodape'
import salasService from '../services/salasService';


function Salas() {
  
  const { id } = useParams();
  
  const [sala, setFormData] = useState({});

  const history = useNavigate();

  useEffect(() => {
      async function fetchFormData () {
      
      try {
        const response = await salasService.getOneSalas(id);
         
        //console.log('id =' + id);
        //const response = await axios.get(`http://localhost:5001/salas/${id}`);
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
            
              alert("teste");
              await salasService.createSalas(sala);
              alert('incluido com sucesso!'); 
          }
          else {
               
               await salasService.updateSalas(sala,id);
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
      setFormData({ ...sala, [name]: value });
    };

  
  return (    

    <Container className='contsalas' >
      <Row>
        <Cabecalho />
      </Row>
      
      <Form onSubmit={handleSubmit} className='caixasalas'>
       <div className='todo'>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label> NUMERO: <Form.Control  type="text" name="numero" value={sala.numero} onChange={handleChange}/> </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> TIPO: <Form.Control type="text" name="tipo" value={sala.tipo} onChange={handleChange} /></Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> CAPACIDADE:  <Form.Control type="text" name="capacidade" value={sala.capacidade} onChange={handleChange} /></Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> VALOR: <Form.Control type="text" name="valor" value={sala.valor} onChange={handleChange} /></Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> DESCRIÇÃO: <Form.Control type="text" name="descriçao" value={sala.descriçao} onChange={handleChange} /></Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> IMAGEM: <Form.Control type="text" name="img" value={sala.img} onChange={handleChange} /></Form.Label>
      </Form.Group>
      
      
      


      
          <Button  variant="primary" type="submit" name="salvar">
            Salvar
          </Button>
         
          <Button  variant="primary" type="submit" name="cancelar">
            Cancelar
          </Button>
            
          
      </div>
      <img className="tamanho2" src={sala.img} alt="imagem banco"></img>
    </Form>
    
    <Row>
      <Rodape/>
      </Row>
            
    </Container>
  );
}

export default Salas;