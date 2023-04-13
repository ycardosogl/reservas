import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroupItem, Col, Img, Image, Container } from 'react-bootstrap';
import './style.css'

function FooterIcons() {
  return (
    <Container className='contfooter' >
        <div>
            <div className='back'>
                <footer>
                    <div class="container">
                        <div class="row">
                         
                            <div class="col-sm-6 col-md-3 item">
                                <div className='serviço'>
                                <h3>Localização</h3>                          
                            <a href='https://www.google.com/maps/place/Rua+Rio+Javari+-+Nossa+Sra.+das+Gracas,+Manaus+-+AM,+69053-110/@-3.1050078,-60.0252567,17z/data=!3m1!4b1!4m6!3m5!1s0x926c0554fdeb42cf:0x4fec149710c1bb92!8m2!3d-3.1050078!4d-60.023068!16s%2Fg%2F1ymssfqhj'>SAIBA MAIS</a>                               
                            
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                    <div className='oferecemos'>
                        <h3>Oferecemos</h3>
                        <ul>
                            <li><a >Mais agilidade nas reservas.</a></li>
                            <li><a >Conforto e privacidade para seus eventos.</a></li>
                            <li><a >Variedades de salas.</a></li>
                            
                        </ul>
                    </div>
                    </div>
                    <div class="col-md-6 item text">
                    <div className='ycreservas'>
                        <h3>YC.RESERVAS</h3>
                        <p> Uma experiência única para você! Aqui você encontra<br/> os melhores ambientes para suas reuniões e comemorações, <br/>de uma maneira mais rapida e pratica.</p>
                          </div>
                          </div>                   
                    
                </div>
                
            </div>
        </footer>
        </div>
        </div>
    </Container>

);

}

export default FooterIcons;