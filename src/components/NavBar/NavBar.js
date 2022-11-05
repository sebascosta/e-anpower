import React from "react";
import '../App.css';
import { useState, useEffect } from "react";
import { getDocs, collection } from 'firebase/firestore'
import logo from '../Images/logo.png';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { db } from '../../services/firebase'



const Nav =() =>{

  const [categories, setCategories] = useState([])

  useEffect(()=> {

    const collectionRef = collection(db, 'categories')

    getDocs(collectionRef).then(response => {
      const categoriesAdapted = response.docs.map(doc => {
        const data = doc.data()
        const id = doc.CartWidget
        return { id, ...data}
      })
      setCategories(categoriesAdapted)
    })
  }, [])

   return( 
    <nav className='ulNav'>      
          <img src={logo} alt="logo" className="logo"/>
          <NavLink to={'/'}>
          <h4>Inicio</h4>
          </NavLink>  

          {
            categories.map(cat => (
            <NavLink key={cat.id} to={`/category/${cat.slug}`}>{cat.label}</NavLink>))
          }
          <CartWidget /> 
                  
        
    </nav>
      )
}


export default Nav;