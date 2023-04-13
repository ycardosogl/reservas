import React, { useState, useEffect ,handleSubmit} from 'react';
import axios from 'axios';
import { useParams} from "react-router-dom";
import { Container, Row, Col, Form, FormControl, Button, Table,Image } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho/cabecalho';
import Rodape from '../componentes/footer/rodape';
import { Link } from 'react-router-dom';
import salasService from '../services/salasService';


function Listarsalas() {
  
  

  const [tableData, setTableData] = useState([]);
    
    useEffect(() => {
        async function fetchTableData () {
        
        try {
           
          
          //const response = await axios.get('http://localhost:5001/salas');
          //console.log('resposta' + response.data);
          const response = await salasService.getSalas();
          setTableData(response.data);
        } catch (error) {
          console.error(error);
        }
    
        };
        fetchTableData();
      },[]); 

      async function handleDelete(id) {
        try {
          
          const response = await salasService.deleteSalas(id);         
              //await axios.delete(`http://localhost:5001/salas/${id}`);
              alert('deletado com sucesso!');
        } catch (error) {
          console.error(error);
        }      
      }

    
 return (  

    <Container className='contlistar'>
      <Row>
        <Col xs={12}>
        <Cabecalho />
        </Col>
      </Row>

      
      <div className='caixalistar'>
      <Row className='pesquisa'>

        <Form onSubmit={handleSubmit} className="form-pesquisar">
                <FormControl
                type="text"
                placeholder="Pesquisar"
                name='search'
                />
                <Button variant="outline-success" type="submit">Pesquisar</Button>
        </Form>
        
        <div className="table-container">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>NUMERO</th>
                                <th>CAPACIDADE</th>
                                <th>DESCRIÇÃO</th>
                                <th>VALOR</th>
                                <th>TIPO</th>
                                <th>EDITAR</th>
                                <th>DELETAR</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => {
                                return (
                            <tr key={index} data-toogle="tooltip" title={row.cep}>
                                <td>{row.numero}</td>
                                <td>{row.capacidade}</td>
                                <td>{row.descriçao}</td>
                                <td>{row.valor}</td>
                                <td>{row.tipo}</td>
                                <td>
                                  <Link to={`/salas/${row._id}`}  >
                                    <Image
                                          src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
                                          alt="editar"
                                          className="rounded-circle"
                                          width="30"
                                          height="30"
                                    />
                                  </Link>
                                </td>
                                <td>
                                    <Image 
                                      src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                                      alt="apagar"
                                      className="rounded-circle"
                                      width="30"
                                      height="30"
                                      onClick={() => handleDelete(row._id)}
                                    />
                                </td>                          
                            </tr>
                            );
                            })}
                        </tbody>
                    </Table>
                </div>



      </Row>

      <Row>            

                




      </Row>        
      </div>
      <Link to="/salas/:id">
          <Button>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4315/4315609.png"
              alt="Incluir"
              className="rounded-circle"
              width="30"
              height="30"
            />
          </Button>
          </Link>
        <Row >
            <Rodape/>           
        </Row>    

    </Container>
  );
}

export default Listarsalas;