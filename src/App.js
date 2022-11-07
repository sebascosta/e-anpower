import React from 'react';
import './components/App.css';
import { useState, createContext } from 'react';
import Nav from './components/NavBar/NavBar';
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart'
import Checkout from './components/checkout/Checkout'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './notification/NotificationService';

function App() {
  return (
    
      <div>   
        <NotificationProvider>
         <CartProvider>   
          <BrowserRouter> 
            <Nav />
            <Routes>
              <Route path = '/' element={<ItemListContainer greeting={'Bienvenido/a'} />}/>
              <Route path = '/category/:categoryId' element={<ItemListContainer />}/>
              <Route path = '/detail/:productId' element={<ItemDetailContainer /> }/>
              <Route path = '/cart' element={<Cart/>}/>
              <Route path = '/checkout' element={<Checkout/>}/>
              <Route path = '*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
          </BrowserRouter>
        </CartProvider> 
        </NotificationProvider>
      </div>
   
  );
}

export default App;
