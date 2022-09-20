import React from "react";
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


function Calzas() {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src=""/>
        <Card.Body>
          <Card.Title>Calza Toxic</Card.Title>
          <Card.Text>
            Lorem ipsum
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
    )
}

export default Calzas;