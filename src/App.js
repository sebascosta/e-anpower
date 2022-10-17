import React from 'react';
import './components/App.css';
import Nav from './components/NavBar/NavBar';
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    
    
      <div>       
        <BrowserRouter> 
        <Nav />
          <Routes>
            <Route path = '/' element={<ItemListContainer greeting={'Bienvenido/a'} />}/>
            <Route path = '/category/:categoryId' element={<ItemListContainer />}/>
            <Route path = '/detail/:productId' element={<ItemDetailContainer/> }/>
            <Route path = '*' element = {<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
   
  );
}

export default App;
