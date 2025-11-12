import React from "react";
import "./Header.css";
// 1
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

// 1. Management
// 2. Vpvv Team
const Header = () => {
  const goVpvv = () => {
    window.location.href = "https://vpvvindia.world/";
    // or use window.open("https://vpvvindia.world/admin/login", "_blank"); for new tab
  };
  return (
    <>
      <Navbar expand="lg" className="bg-dark-tertiary navbar">
        <Container>
          <div className="navabar-caontainer">
            <div>
              <Navbar.Brand href="/">
                <Link to="/ " className="text-light logo">
                  <img
                    alt="VPVV-LOGO"
                    src="https://res.cloudinary.com/dttqciolc/image/upload/v1762494318/logo-vpvv-enhance_deivee.png"
                    width="90"
                    height="90"
                    // className="d-inline-block align-top"
                  />
                </Link>
              </Navbar.Brand>
            </div>
            {/* <div>
              <Navbar.Brand className="text-light logo">
                <Link to="/" className="text-light logo">
                  VPVV
                </Link>
              </Navbar.Brand>
            </div> */}
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link className="">
                <Link to="/about-us">About Us</Link>
              </Nav.Link> */}
              <NavDropdown title="About Us" id="collapsible-nav-dropdown">
                <Link to="/about-us">
                  <NavDropdown.Item href="/about-us">
                  About Us
                  </NavDropdown.Item>
                </Link>
                <Link to="/management-team">
                  <NavDropdown.Item href="/management-team">
                    Management Team
                  </NavDropdown.Item>
                </Link>
                <Link to="/office-team">
                  <NavDropdown.Item href="/office-team">
                    Office Team
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <Nav.Link className="">
                <Link to="/our-project">Our Project</Link>
              </Nav.Link>
              {/* <NavDropdown title="Illustration" id="collapsible-nav-dropdown">
                <Link to="/management-team">
                  <NavDropdown.Item href="/management-team">
                    Management Team
                  </NavDropdown.Item>
                </Link>
                <Link to="/office-team">
                  <NavDropdown.Item href="/office-team">
                    Office Team
                  </NavDropdown.Item>
                </Link>
              </NavDropdown> */}

              {/* 3 */}
              <NavDropdown title="Project Site" id="collapsible-nav-dropdown">
                <Link to="/proposed">
                  <NavDropdown.Item href="/proposed">
                    Proposed Office & PMO{" "}
                  </NavDropdown.Item>
                </Link>
                <Link to="/township-perspective">
                  <NavDropdown.Item href="/township-perspective">
                    Township
                  </NavDropdown.Item>
                </Link>
                <Link to="/data-center">
                  <NavDropdown.Item href="/data-center">
                    Data Center
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              {/* <Nav.Link className="">
                <Link to="/whispers-of-the-past">Whispers of the Past</Link>
              </Nav.Link> */}
              <Nav.Link className="">
                <Link to="/newsroom">Newsroom</Link>
              </Nav.Link>
              <Nav.Link className="">
                <Link to="/interaction">Interaction</Link>
              </Nav.Link>
            </Nav>
            <div className="btn visiting-btn">
              <Button variant="outline-light" onClick={goVpvv}>
                Visit VPVV Portal
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
