import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';
import logo from "./public/webLogo.JPG";

const Navigation = () => {
  return (
    //CSS stays in the same file as .jsx script
    <Navbar bg="light" expand="lg" style={{position: 'fixed', top: 0, width: '100%', zlndex: 1000}}>
              <Container>
                <Navbar.Brand as={Link} to="/">
                  <img src={logo} width="30" height="30" className="d-inline-block aligh-top" alt="Logo" />{''}
                  E-Scooter accidents and unsolved compensations
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="./pages/1_home">Home</Nav.Link>
                        <Nav.Link as={Link} to="./pages/2_blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="./pages/3_news">News</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
    </Navbar>
  );
};

export default Navigation;
