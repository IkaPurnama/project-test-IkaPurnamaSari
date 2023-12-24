import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
import Imgbrand from "/logo1.png";

const NavbarComponent = () => {
  const [navBackground, setNavBackground] = useState(false);
 

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavBackground(false);
    } else {
      setNavBackground(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
 

  const activeStyle = {
    backgroundColor: "white",
    color: "orange",
    transition: "background-color 0.3s ease-in-out",
  };

  return (
   
  
    <Navbar
      className={`Nav ${navBackground ? "bg-orange" : ""}`}
      expand="lg"
      fixed="top"
    >
      <Container>
        <div className="d-flex justify-content-start w-100">
        <img
              src={Imgbrand}
              alt="Suitmedia"
              className="mt-6"
              style={{ height: "70px", width: "120px", marginRight:"15px"}}
            />
          <Navbar.Brand  className="mt-6" style={{ color: "white" }}>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
         
              <Nav.Link
                as={Link}
                to="/work"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                style={{ color: "white", marginRight: "25px" }}
                activeStyle={activeStyle}
              >
                Work 
              </Nav.Link>
           
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
               
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
                style={{ color: "white", marginRight: "25px" }}
                activeStyle={activeStyle}
              >
              About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/services"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
                style={{ color: "white", marginRight: "25px" }}
                activeStyle={activeStyle}
              >
                Services
              </Nav.Link>
            </Nav.Item> 
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
                style={{ color: "white", marginRight: "25px" }}
                activeStyle={activeStyle}
              >
                Ideas
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/careers"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
                style={{ color: "white", marginRight: "25px" }}
                activeStyle={activeStyle}
              >
                Careers
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
                style={{ color: "white", marginRight: "25px" }}
                activeStyle={activeStyle}
              >
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default NavbarComponent;