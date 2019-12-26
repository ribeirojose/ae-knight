import * as React from 'react'
import '../../config'
import './chess.scss'
import Board from '../../components/board/Board'
import Nav from '../../components/nav/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getKnight, selectSquare } from '../../redux/ducks/chess'

export const Chess = (props) => {
  return (
    <div>
      <Nav />

      <Container>
        <Row>
          <Col>
            <Board {...props} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cols: state.knight.cols,
    rows: state.knight.rows,
    selectedSquare: state.knight.selectedSquare,
    squares: state.knight.squares,
    highlightedSquares: state.knight.highlightedSquares
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getKnight: bindActionCreators(getKnight, dispatch),
    selectSquare: bindActionCreators(selectSquare, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chess)
