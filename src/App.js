import React from 'react';
import './App.css';
import Nav from './NavBar';
import Calzas from './Calzas';
import Remeras from './Remeras';
import Inicio from './Inicio';
import Tops from './Tops';
import {BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>        
        <Nav />
        <Routes>
        <Route path='/' exact component={Inicio}/>
        <Route path='/calzas' component={Calzas}/>
        <Route path='/remeras' component={Remeras}/>
        <Route path='/tops' component={Tops}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
