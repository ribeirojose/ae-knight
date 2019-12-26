import * as React from 'react'
import '../../config'
import './chess.scss'
import Board from '../../components/board/Board'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getKnight, selectSquare } from '../../redux/ducks/chess'

export const Chess = (props) => {
  return (
    <div>
            <Board {...props} />
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
