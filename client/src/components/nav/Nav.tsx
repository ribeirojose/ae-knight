import * as React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Help from '../help/Help'

export default (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand >AE Studio - Chess Knight Challenge</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => props.setHelpShow(true)} > How does this work?</Nav.Link>
        </Nav>
        <Help
          show={props.helpShow}
          onHide={() => props.setHelpShow(false)}
        />
      </Navbar.Collapse>
    </Navbar >
  )
}
