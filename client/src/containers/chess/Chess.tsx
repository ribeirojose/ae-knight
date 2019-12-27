import * as React from 'react'
import '../../config'
import './chess.scss'
import Board from '../../components/board/Board'
import ChessNav from '../../components/chessNav/ChessNav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getKnight, selectSquare, setHelpShow } from '../../redux/ducks/chess'


export const ChessComponent = (props) => {
  return (
    <div>
      <ChessNav {...props} />

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
    helpShow: state.knight.helpShow,
    cols: state.knight.cols,
    rows: state.knight.rows,
    selectedSquare: state.knight.selectedSquare,
    squares: state.knight.squares,
    highlightedSquares: state.knight.highlightedSquares
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setHelpShow: bindActionCreators(setHelpShow, dispatch),
    getKnight: bindActionCreators(getKnight, dispatch),
    selectSquare: bindActionCreators(selectSquare, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChessComponent)
