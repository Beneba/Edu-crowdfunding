import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaCartPlus } from "react-icons/fa";


// import {Navbar,  Container,  Nav, Button, Form, FormControl, NavDropdown, } from "react-bootstrap";

function Header() {
  return (
    // <Navbar bg="light" expand="lg">
    //   <Container fluid>
    //     <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //       <Form className="d-flex">
    //         <FormControl
    //           type="search"
    //           placeholder="Search"
    //           className="me-2"
    //           aria-label="Search"
    //         />
    //         <Button variant="outline-success">Search</Button>
    //       </Form>

    //       <Nav
    //         className="me-auto my-2 my-lg-0"
    //         style={{ maxHeight: "100px" }}
    //         navbarScroll
    //       >
    //         <Nav.Link href="#action1">Home</Nav.Link>
    //         <Nav.Link href="#action2">Link</Nav.Link>
    //         <NavDropdown title="Link" id="navbarScrollingDropdown">
    //           <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action4">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action5">
    //             Something else here
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //         <Nav.Link href="#" disabled>
    //           Link
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <div className="app">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            FundEducation
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <FaBars size={25} color="white" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav ms-auto">
              <li className="nav-item">
                
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li nav-item>
                
                <Link className="nav-link" to="/">
                  About
                </Link>
              </li>
              <li nav-item>
                
                <Link className="nav-link" to="/">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
