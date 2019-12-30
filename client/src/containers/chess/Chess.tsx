import * as React from 'react'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Board } from '../../components/board/Board'
import { ChessNav } from '../../components/chessNav/ChessNav'
import '../../config'
import { selectSquare, setHelpShow } from '../../redux/ducks/chessBoard'
import { getKnight } from '../../redux/ducks/knight'
import './chess.scss'


export const ChessComponent = (props) => {
  return (
    <div>
      <ChessNav {...props} />

      <Container className="display-table">
        <Board {...props} />
      </Container>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    possiblePosIdxArr: state.knight.possiblePosIdxArr,
    helpShow: state.chessBoard.helpShow,
    selectedSquareIdx: state.chessBoard.selectedSquareIdx,
    squareIdxList: state.chessBoard.squareIdxList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setHelpShow: bindActionCreators(setHelpShow, dispatch),
    getKnight: bindActionCreators(getKnight, dispatch),
    selectSquare: bindActionCreators(selectSquare, dispatch),
  }
}

export const Chess = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChessComponent)
