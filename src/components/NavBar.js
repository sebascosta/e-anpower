import React from "react";
import './App.css';
import logo from './Images/logo.png';
import {BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import CartWidget from './CartWidget/CartWidget';

function Nav() {
   return( 
    <nav className="nav">      
            
        <ul className='ulNav'>
          <img src={logo} alt="logo" className="logo"/>
          <Link to={'/'}>
          <li>Inicio</li>
          </Link>            
          <Link to={'/calzas'}>
          <li>Calzas</li>
          </Link>
          <Link to={'/tops'}>
          <li>Tops</li>
          </Link>
          <Link to={'/remeras'}>
          <li>Remeras</li>
          </Link>
          <CartWidget /> 
        </ul>
    </nav>
      )
}


export default Nav;