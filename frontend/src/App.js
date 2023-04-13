import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Clientes from './paginas/clientes';
import Funcionarios from './paginas/funcionarios';
import Salas from './paginas/salas';
import Home from './paginas/home';
import Index from './paginas/index';
import Listarsalas from './paginas/listarsalas';
import Listarclientes from './paginas/listarclientes';
import Listarfuncionarios from './paginas/listarfuncionarios';
import Reservas from './paginas/reservas';

function App() {
  return (
    

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/clientes/:id" element={<Clientes/>} />
          <Route path="/funcionarios/:id" element={<Funcionarios/>} />
          <Route path="/salas/:id" element={<Salas/>} />
          <Route path="/index" element={<Index/>} />
          <Route path="/listarsalas" element={<Listarsalas/>} />
          <Route path="/listarclientes" element={<Listarclientes/>} />
          <Route path="/listarfuncionarios" element={<Listarfuncionarios/>} />
          <Route path="/reservas" element={<Reservas/>} />
          <Route path="/reservas/:id" element={<Reservas/>} />

        </Routes>
      </BrowserRouter>    

   

  );
}

export default App;
