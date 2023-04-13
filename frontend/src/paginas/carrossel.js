import React, {useState, useEffect} from 'react';
import { Button, Carousel, Container, Row, } from 'react-bootstrap';
import axios from 'axios';
import './style.css'
import { Link } from 'react-router-dom';

//import Reserva from '../componentes/Reserva/Reserva';
//import Modalis from '../componentes/BSdiffermod';
//import Cabecalho from '../componentes/cabecalho/cabecalho';

function Carrossel() {

    const [carrosselData, setCarrosselData] = useState([]);
  
    useEffect(() => {
      async function fetchCarrosselData () {
      
      try {
        
        const response = await axios.get('http://localhost:5001/salas');
        setCarrosselData(response.data);
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchCarrosselData();
    },[carrosselData]);

    return (
      
      <Container class="absolute">

        <Row>
              
                    <Carousel className='carousel' >
                          
                    <a href='/reservas/inserir'><button className="button-86" role="button">RESERVE AGORA!</button></a>
      
                        {carrosselData.map((item, index) => (
                        <Carousel.Item className='carousel-item' key={item._id}>
                          <Link to={`/salas/${item._id}`} >
                          <img className='tamanho' key={index} src={item.img} alt={item.numero}/>  
                                                           
                          </Link> 
                          
                          <Link to='/salas'>
                          </Link>                      
                          </Carousel.Item>
                        ))}
                    </Carousel>
                   
               

        </Row>

        </Container>

    );
  }
  
  export default Carrossel;