import * as React from 'react'
import '../../config'
import './board.scss'
import Square from '../square/Square'


export default class Board extends React.Component<any, any> {
  handleClick = async (i) => {
    this.props.selectSquare({ selectedSquare: i })
    this.props.getKnight(this.squareIdxToAlgebraic(i), 2)
  }

  squareAlgebraicToIdx = (loc) => {
    return ((parseInt(loc.slice(1)) - 1) * 8) + this.props.cols.indexOf(loc[0])
  }

  squareIdxToAlgebraic = (idx) => {
    return this.props.cols[idx % 8] + `${Math.floor(idx / 8) + 1}`
  }

  renderSquare = (loc) => {
    var squareIdx = this.squareAlgebraicToIdx(loc)
    return <Square
      key={loc}
      value={this.props.squares[squareIdx]}
      highlight={this.props.highlightedSquares[squareIdx]}
      onClick={() => this.handleClick(squareIdx)} />
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

