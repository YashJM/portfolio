import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { MDBIcon } from 'mdb-react-ui-kit';
import Lottie from "react-lottie";
import avatarSolid from "../animations/icons/avatar-solid.json";
import document from "../animations/icons/document.json";
import code from "../animations/icons/code.json";
import vlog from "../animations/icons/vlog.json";

function NavBar() {
  return (
    <header>
      <Navbar bg="none" expand="lg" className="d-none d-lg-block">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/images/logo-yash.svg"
              alt="Yash Logo"
              style={{ height: "50px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">About Me
                {<Lottie
                  height={50}
                  width={50}
                  isClickToPauseDisabled={true}
                  className="fluid-svg"
                  options={{ loop: true, autoplay: true, animationData: avatarSolid }} />}
              </Nav.Link>
              <Nav.Link href="#link">Resume
                {<Lottie
                  height={50}
                  width={50}
                  isClickToPauseDisabled={true}
                  className="fluid-svg"
                  options={{ loop: true, autoplay: true, animationData: document }} />}
              </Nav.Link>
              <Nav.Link href="#link">Projects
                {<Lottie
                  height={50}
                  width={50}
                  isClickToPauseDisabled={true}
                  className="fluid-svg"
                  options={{ loop: true, autoplay: true, animationData: code }} />}
              </Nav.Link>
              <Nav.Link href="#link">Vlogs
                {<Lottie
                  height={50}
                  width={50}
                  isClickToPauseDisabled={true}
                  className="fluid-svg"
                  options={{ loop: true, autoplay: true, animationData: vlog }} />}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar bg="none" expand="lg" className="d-block d-lg-none">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/images/logo-yash.svg"
              alt="Yash Logo"
              style={{ height: "50px" }}
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;
