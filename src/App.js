import React from 'react';
import './components/App.css';
import Nav from './components/NavBar/NavBar';
import Calzas from './components/Calzas';
import Remeras from './components/Remeras';
import Inicio from './components/Inicio';
import Tops from './components/Tops';
import {BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    
    
      <div>       
        <BrowserRouter> 
        <Nav />
          <Routes>
            <Route path = '/' element={<ItemListContainer greeting={'Bienvenido/a'} />}/>
            <Route path = '/detail/:productId' element={<ItemDetailContainer/> }/>
          </Routes>   
          
        </BrowserRouter>
      </div>
   
  );
}

export default App;
