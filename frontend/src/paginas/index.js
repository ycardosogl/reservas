import React from 'react';
import { Container,Row,ListGroupItem,Col,Image } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho/cabecalho';
import Rodape from '../componentes/footer/rodape';
import { Link } from 'react-router-dom';


function Index() {
  return (
    

    <Container className='contindex'>
      <Cabecalho/>

     
      <div className='caixaindex'>
       <Row  className='sls'>
      <Link to='/listarsalas' className='linksalas'> <Image className='salasimg' src="https://static.vecteezy.com/ti/vetor-gratis/p1/5548738-interior-moveis-sala-com-sofa-e-acessorios-linha-logo-icone-design-ilustracao-vetor.jpg"/></Link>
      

      
      <Link to='/listarclientes' className='linkclient'> <Image className='clientesimg' src="https://www.guiadeinvestimento.com.br/wp-content/uploads/2021/08/Saiba-como-manter-uma-boa-rela%C3%A7%C3%A3o-entre-o-seu-cliente-e-o-marketing-digital-1024x768.jpeg"/></Link>
      </Row>

      <Row className='fh'>
      <Link to='/listarfuncionarios' className='linkfunc' > <Image className='funcionariosimg' src="https://tallos.com.br/blog/wp-content/uploads/2022/11/Qual-e-o-processo-correto-de-atendimento-ao-cliente.jpg"/></Link>
      

      
      <Link to='/home' className='linkIntra'> <Image className='usuarioimg' src="https://img.freepik.com/vetores-premium/icone-do-usuario_6091-78.jpg"/></Link>
      </Row>
      </div>
      
     

      
      

      <Row>
      <Rodape/>
      </Row>
      
      </Container>
      )
      };

export default Index;