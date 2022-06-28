import React from "react";
import { Navbar } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
const NavBarMenu  = () =>{
    return(
        <div>
           <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Products</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
   
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
       
      </Nav>
    
</Navbar>
        </div>

    );
      };
export default NavBarMenu;