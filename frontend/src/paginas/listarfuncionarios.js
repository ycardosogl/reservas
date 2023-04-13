import React, { useState, useEffect ,handleSubmit} from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, FormControl, Button, Table,Image } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho/cabecalho';
import Rodape from '../componentes/footer/rodape';
import { Link } from 'react-router-dom';
import funcionariosService from '../services/funcionariosService';


function Listarfuncionarios() {
  
    const [tableData, setTableData] = useState([]);
    
    useEffect(() => {
        async function fetchTableData () {
        
        try {
          const response = await funcionariosService.getFuncionarios();
          //const response = await axios.get('http://localhost:5001/funcionarios');
          //console.log('resposta' + response.data);
          setTableData(response.data);
        } catch (error) {
          console.error(error);
        }
    
        };
        fetchTableData();
      },[]); 

      async function handleDelete(id) {
        try {
          const response = await funcionariosService.deleteFuncionarios(id);
              //await axios.delete(`http://localhost:5001/funcionarios/${id}`);
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
                                <th>CPF</th>
                                <th>NOME</th>
                                <th>EMAIL</th>
                                <th>CEP</th>
                                <th>TELEFONE</th>
                                <th>FUNÇÃO</th>
                                <th>EDITAR</th>
                                <th>DELETAR</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => {
                                return (
                            <tr key={index} data-toogle="tooltip" title={row.cep}>
                                <td>{row.cpf}</td>
                                <td>{row.nome}</td>
                                <td>{row.email}</td>
                                <td>{row.cep}</td>
                                <td>{row.telefone}</td>
                                <td>{row.funcao}</td>
                                <td>
                                  <Link to={`/funcionarios/${row._id}`}  >
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
      <Link to="/funcionarios/:id">
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

export default Listarfuncionarios;