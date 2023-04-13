import React from 'react';
import {Anchor,Image,Container} from 'react-bootstrap';
import './style.css'
//import Whats from './whats.png'
import { Link } from 'react-router-dom';

function Rodape() {
  return (
    <Container>
    <footer class="text-center text-lg-start central" >
    <div className='rodape'>
      <div class="container d-flex justify-content-center py- footerCont">
        <div className='centraliza'>
          <Link to='https://www.instagram.com/' className='Icones btn btn-primary btn-lg btn-floating mx-2'><Image className='Icones' src='https://www.sendible.com/hs-fs/hubfs/Imported_Blog_Media/sm-icons-instagram-glyph-logo.png?width=120&height=120&name=sm-icons-instagram-glyph-logo.png'/></Link>
        </div>
        <div className='centraliza'>
          <Link  to='https://pt-br.facebook.com/' className='Icones btn btn-primary btn-lg btn-floating mx-2'> <Image className='Icones' src='https://imagensemoldes.com.br/wp-content/uploads/2020/04/%C3%8Dcone-Facebook-PNG.png'/></Link>
        </div>
        <div className='centraliza'>
          <Link to='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D' className='Icones btn btn-primary btn-lg btn-floating mx-2'> <Image className='Icones' src='https://cdn-icons-png.flaticon.com/512/2111/2111819.png'/></Link>
        </div>
      </div>
      <div className='centraliza'>
          <Link to='www.twitter.com' > <Image className='Icone1' src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1-1.png"/></Link>
        </div>
        </div>
      
  </footer>
  </Container>
  

  );


}

export default Rodape;