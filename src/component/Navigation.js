import React from 'react'
import {Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Addmovie from './Addmovie'

function Navigation({addmovie,search,setSearch}) {
  return (
    <div>
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand >Navbar</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to='/'>Home</Nav.Link>
        <Nav.Link as={Link} to='/About'>About</Nav.Link>
        
        <Nav.Link as={Link} to='/Contact' >
          Contact
        </Nav.Link>
        <Nav.Link as={Link} to='/Movies'>movies</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={search} 
          onChange={(e)=>(setSearch(e.target.value))}
        />
        <Addmovie addmovie={addmovie}/>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Navigation