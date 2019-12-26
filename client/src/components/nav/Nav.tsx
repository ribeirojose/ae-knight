import * as React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#knight">AE Studio - Chess Knight Challenge</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#knight">Knight</Nav.Link>
          <Nav.Link href="#about">How does this work?</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
