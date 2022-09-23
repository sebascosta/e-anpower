import React from 'react';
import './components/App.css';
import Nav from './components/NavBar';
import Calzas from './components/Calzas';
import Remeras from './components/Remeras';
import Inicio from './components/Inicio';
import Tops from './components/Tops';
import {BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <Router>
      <div>        
        <Nav />
        <ItemListContainer greeting={'Bienvenido/a'} />
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
