import * as React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Help from '../help/Help'

class ChessNav extends React.Component<any, any> {
  componentDidMount() {
    this.props.setHelpShow(true)
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand >Knight Turns</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => this.props.setHelpShow(true)}>How does this work?</Nav.Link>
          </Nav>
          <Help
            show={this.props.helpShow}
            onHide={() => this.props.setHelpShow(false)}
          />
        </Navbar.Collapse>
      </Navbar >
    )
  }
}

export default ChessNav;
