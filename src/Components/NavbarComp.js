import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class NavbarComp extends Component {
  render() {
    return (
        <Router>
        <div>
          <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Barra de Navegación</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
                    <Nav.Link as={Link} to={'/Acercade'}>Acerca de</Nav.Link>
                    <Nav.Link as={Link} to={'/Contacto'}>Contacto</Nav.Link>
                    <NavDropdown title="Contenido" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Noticias</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Recetas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Nutrimentos</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Ingreso de usuarios</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </div>

      </Router>
    )
  }
}

//https://www.youtube.com/watch?v=0wJCxEDDetE
