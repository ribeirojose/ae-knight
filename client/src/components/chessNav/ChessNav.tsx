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
        <Nav>
          <Nav.Link onClick={() => this.props.setHelpShow(true)}>Need help?</Nav.Link>
        </Nav>
        <Help
          show={this.props.helpShow}
          onHide={() => this.props.setHelpShow(false)}
        />
      </Navbar >
    )
  }
}

export default ChessNav;
