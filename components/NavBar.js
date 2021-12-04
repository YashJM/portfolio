import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { MDBIcon } from 'mdb-react-ui-kit';

function NavBar() {
  return (
    <header>
      <Navbar bg="none" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/images/logo-yash.svg"
              alt="Yash Logo"
              style={{height: "50px"}}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">About Me&nbsp;&nbsp;<MDBIcon fas icon="info-circle" /></Nav.Link>
              <Nav.Link href="#link">Resume&nbsp;&nbsp;<MDBIcon fas icon="file" /></Nav.Link>
              <Nav.Link href="#link">Projects&nbsp;&nbsp;<MDBIcon icon="terminal" /></Nav.Link>
              <Nav.Link href="#link">Blog&nbsp;&nbsp;<MDBIcon fab icon="blogger" /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;
