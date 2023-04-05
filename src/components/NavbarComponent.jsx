import React from 'react'
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavbarComponent = () => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bd-navbar fixed-top"><br />
    // <nav className="navbar navbar-expand-lg bg-light ">
    //   <div className="container">
    //   <img src="./src/assets/react.svg" alt="Bootstrap" width="30" height="24" />
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="/#">Charlie</a>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/Home">Home</NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/User">Users</NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/Product">Products</NavLink>
    //         </li>
    //       </ul>
    //       <form className="d-flex" role="search">
    //         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    //           <button className="btn btn-outline-light" type="submit">Search</button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>

    <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Container>
        <img src="./src/assets/react.svg" alt="Bootstrap" width="30" height="24" />
        <Navbar.Brand href="#home" className='color-primary fw-bold'>Reiss</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <NavLink className="nav-link" to="/Home">Home</NavLink>
            <NavLink className="nav-link" to="/User">Users</NavLink>
            <NavLink className="nav-link" to="/Product">Products</NavLink>
            <NavLink className="nav-link" to="/Table">DataTable</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
