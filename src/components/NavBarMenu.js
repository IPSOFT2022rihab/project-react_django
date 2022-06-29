import React from "react";
import { Navbar } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
const NavBarMenu  = () =>{
    return(
        <div>
           <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Products</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
   
      <Nav className="me-auto">

        <NavLink className="show-products-nav" to="">Products</NavLink>
        <NavLink className="add-product-nav" to="/product">Add Product</NavLink>
      
       
      </Nav>
    
</Navbar>
        </div>

    );
      };
export default NavBarMenu;