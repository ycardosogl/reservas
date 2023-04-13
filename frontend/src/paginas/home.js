import React from 'react';
import { Container,Row } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho/cabecalho';
//import Footer from '../componentes/footer/footer'
//import Whats from '../componentes/reservas/reservas'
import Carrossel from './carrossel'
import Rodape from '../componentes/footer/rodape'
//import Reservas from '../componentes/reservas/reservas'

function Home() {
  return (
    

    <Container className='conthome'>
      <Cabecalho/>
      <Row sm={10}>
        <br></br>
      </Row>
      <Carrossel/>     

      <Row>
      <Rodape/>
      </Row>
      
      </Container>
      )
      };

export default Home;

