import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroupItem, Col, Container } from 'react-bootstrap';
import './styleCabecalho.css'


function Cabecalho() {
    return (

      <Container>
        <div className='Cabecalho'>
        
        <div>
          <img  className= 'logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBfpVjnn3PAkuEJAyruCvSIX-ybm01cyGCFp0URSvMNCVX4tX0QgbmZlf6Ybs1slsOqXQ&usqp=CAU' alt='logo'/>
        </div> 
        
      

        
        <div className='opcoes'>
                
               
                <a href='/' ><ListGroupItem className='opcao' >HOME</ListGroupItem></a>
                <Col sm={1}/>
                <a href='/clientes'><ListGroupItem className='opcao'>CONTATOS</ListGroupItem></a>
                <Col sm={1}/>
                <a href='/index'><ListGroupItem className='opcao'><img src='https://cdn-icons-png.flaticon.com/128/8237/8237613.png' alt='intranet'/></ListGroupItem></a>
        
            
          </div>
          </div>  
        </Container>
    
            
  );
}

export default Cabecalho;