import React from "react";
import '../App.css';
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function Nav() {
   return( 
    <nav className="nav">      
            
        <ul className='ulNav'>
          <img src={logo} alt="logo" className="logo"/>
          <Link to={'/'}>
          <li>Inicio</li>
          </Link>            
            <Link to={'/category/calzas'}>
            <li>Calzas</li>
            </Link>
          <Link to={'/category/tops'}>
          <li>Tops</li>
          </Link>
            <Link to={'/category/remeras'}>
            <li>Remeras</li>
            </Link>
          <CartWidget /> 
        </ul>
    </nav>
      )
}


export default Nav;