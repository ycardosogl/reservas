import React, { useState, useEffect } from 'react';
import { Container, Row, Form, Button,Image, FormGroup } from 'react-bootstrap';
import { useParams, useNavigate  } from "react-router-dom";
import Cabecalho from '../componentes/cabecalho/cabecalho';
import Rodape from '../componentes/footer/rodape';
import 'bootstrap/dist/css/bootstrap.min.css';
import reservasService from '../services/reservasService';
import ComboSalas from '../paginas/combosalas';
import { Link } from 'react-router-dom';
function Reservas() {
  
  const { id } = useParams();
  const [reserva, setFormData] = useState({});
  const [selectedValue, setSelectedValue] = useState('');

  const history = useNavigate();
  
  useEffect(() => {
      async function fetchFormData () {
      
      try {

        if (id !== 'inserir') {
        const response = await reservasService.getOneReservas(id);
        setFormData(response.data);
        }else {
          const numeroReserva = await reservasService.getOneReservas;
        }

      } catch (error) {
        console.error(error);
      }
  
      };
      fetchFormData();
    },[id]); 

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        
        
        if (event.nativeEvent.submitter.name === "salvar") {
          reserva.funcionario = 'WEB - Internet';
          reserva.cliente = 'WEB - Internet';
          reserva.status = 'R';
          reserva.valortotal = '9999999';  // indicar sala reservada
          if (id === 'inserir') {
           

              await reservasService.createReservas(reserva);
              alert('incluido com sucesso!');
               
          }
          else {
              
              await reservasService.updateReservas(id,reserva);
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
      setFormData({ ...reserva, [name]: value });
    };    

    const handleSelectChange = (value) => {
      setSelectedValue(value);      
      reserva.sala = value;
    };    
  
  return (    

    <Container >
      <Row>
        <Cabecalho/>
      </Row>
     
      <Row>
      
        <Form onSubmit={handleSubmit} className='caixareservass'>          
          
        <div className='ycgi'>
      
          <Form.Label>Nome:<Form.Control type="text" name="nome" value={reserva.cliente} onChange={handleChange}/></Form.Label>
          <Link to="/clientes/:id">
          <Button>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4315/4315609.png"            
              width="30"
              height="30"
            />
          </Button>
          </Link>
        
         
         
         
          <Form.Label>Valor select</Form.Label>
          <Form.Control name='sala' type="text" value={selectedValue} readOnly />

          <ComboSalas onSelectChange={handleSelectChange} />
          
          <Form.Label>Numero:</Form.Label>
          <Form.Control type="text" name="numero" value={reserva.numero} onChange={handleChange}/>
          <Form.Label>Data:</Form.Label>
          <Form.Control type="date" name="data" value={reserva.data} onChange={handleChange}/>
          <Form.Label>Hora inicio:</Form.Label>
          <Form.Control type="number" name="inicio" value={reserva.inicio} onChange={handleChange}/>
          <Form.Label>Hora fim:</Form.Label>
          <Form.Control type="number" name="fim" value={reserva.fim} onChange={handleChange}/>          
          <Form.Label>Valor:</Form.Label>
          <Form.Control type="number" name="valor" value={reserva.valor} onChange={handleChange}/>
          <Form.Label>Observação:</Form.Label>
          <Form.Control type="text" name="observacao" value={reserva.observacao} onChange={handleChange}/>          
          <br></br>
          <Button variant="primary" type="submit" name="salvar">
            Salvar
          </Button>
          <Button variant="primary" type="submit" name="cancelar">
            Cancelar
          </Button>
          <Button variant="primary" disabled type="submit" name="cancelar">
            Cancelar Reserva
          </Button>

          </div>
        </Form>
      </Row>        
      
        <Row>          
          <Rodape/>
        </Row>    

    </Container>
  );
}

export default Reservas;