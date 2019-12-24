import * as React from 'react'
import '../../config'
import './chess.scss'
import { Square } from './square/Square'

interface Props { }
interface State { squares: any, selectedSquare: any }

class Board extends React.Component<Props, State> {
  static readonly cols = "ABCDEFGH".split("")
  static readonly rows = [...Array(8).keys()].map((el) => (el + 1)).reverse()

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(64).fill(null),
      selectedSquare: null,
    };
  }

  handleClick = (i) => {
    const squares = Array(64).fill(null);
    squares[i] = "♞"
    this.setState({
      squares: squares,
      selectedSquare: i,
    });
  }

  locationToSqNumber = (loc) => {
    return ((loc.row - 1) * 8) + Board.cols.indexOf(loc.col)
  }

  sqNumberToLocation = (idx) => {
    return {
      row: Math.floor(idx / 8) + 1, col: Board.cols[idx % 8]
    }
  }

  renderSquare(loc) {
    var sqNumber = this.locationToSqNumber(loc)
    return <Square
      key={loc.col + loc.row}
      value={this.state.squares[sqNumber]}
      onClick={() => this.handleClick(sqNumber)} />;
  }

  render() {
    return (
      Board.rows.map((row) => {
        return (
          <div className={`board-row board-row-${row % 2 === 0 ? 'even' : 'odd'}`} key={row}>
            {Board.cols.map((col) => this.renderSquare({ row: row, col: col }))}
          </div>
        )
      })
    )
  }
}

export const Chess = () => (
  <div className="container">
    <header className="chessboard-header">
      <h1 className="chessboard-title">AE Studio - Chess Knight Challenge</h1>
    </header>
    <div className="chessboard">
      <Board />
    </div>
  </div>
)
