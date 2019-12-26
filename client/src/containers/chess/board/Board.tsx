import * as React from 'react'
import '../../../config'
import './board.scss'
import { Square } from '../square/Square'
// import { getKnightNTurn } from '../../../api/knight/get-turn'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getKnight, selectSquare } from '../../../redux/ducks/chess'


class Board extends React.Component<any, any> {
  handleClick = async (i) => {
    this.props.selectSquare({ selectedSquare: i })
    this.props.getKnight(this.sqNumberToAlgebraic(i), 2)
  }

  algebraicToSqNumber = (loc) => {
    return ((parseInt(loc.slice(1)) - 1) * 8) + this.props.cols.indexOf(loc[0])
  }

  sqNumberToAlgebraic = (idx) => {
    return this.props.cols[idx % 8] + `${Math.floor(idx / 8) + 1}`
  }

  renderSquare(loc) {
    var sqNumber = this.algebraicToSqNumber(loc)
    return <Square
      key={loc}
      value={this.props.squares[sqNumber]}
      highlight={this.props.highlightedSquares[sqNumber]}
      onClick={() => this.handleClick(sqNumber)} />;
  }

  render() {
    return (
      this.props.rows.map((row) => {
        return (
          <div className={`board-row board-row-${row % 2 === 0 ? 'even' : 'odd'}`} key={row}>
            {this.props.cols.map((col) => this.renderSquare(`${col}` + row))}
          </div>
        )
      })
    )
  }
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
)(Board)
