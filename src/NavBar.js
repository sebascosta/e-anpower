import React from "react";
import './App.css';
import {BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function Nav() {
   return( 
    <nav className="nav">
        <ul className='ulNav'>
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
        </ul>
    </nav>
      )
}


export default Nav;