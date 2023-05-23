import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Navbar.css'

const Navbars = () => {
    return (
        <Navbar expand="lg" sticky="top" style={{backgroundColor: 'rgb(255, 252, 252)'}} >
        <Container fluid>
          <Navbar.Brand href="/"> <img src={require('../../assets/natslogo.png')} alt='businesslogo' style={{height: '60px', paddingLeft: '80px'}} /></Navbar.Brand>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navigation">
              
              <Nav.Link href="/services" className="px-3" >Services</Nav.Link>
              <Nav.Link href="/about" className="px-3">About Us</Nav.Link>
              <Nav.Link href="/career" className="px-3">Career</Nav.Link>
              <Nav.Link href="/contact" className="px-3">Contact</Nav.Link>

            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navbars;