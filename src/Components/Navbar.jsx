import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navegation() {
  return (
    <div>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Nav className="me-auto p-3 fs-4 text">
            <i class="bx bx-home icon mt-3 bx-tada-hover d-flex flex-row link">
              <Link to="/home" className="link">Home</Link>
            </i>
            <i class="bx bxs-contact icon mt-3 bx-tada-hover ms-3 d-flex flex-row link">
              <Link to="/contacto" className="link">Contacto</Link>
            </i>
          </Nav>
          <Navbar.Brand href="/home" className="fs-2 text">
            Happy Cake
          </Navbar.Brand>
          <i class="bx bxs-cake bx-md bx-tada icon"></i>
        </Container>
      </Navbar>
    </div>
  );
}
export default Navegation;
