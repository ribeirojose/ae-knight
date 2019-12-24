import * as React from 'react'
import '../../config'
import './chess.scss'
import { Square } from './square/Square'

interface Props { }
interface State { squares: any, selectedSquare: any }

class Board extends React.Component<Props, State> {
  static readonly cols = "abcdefgh".split("")
  static readonly rows = [...Array(8).keys()].map((el) => (el + 1)).reverse()

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(64).fill(null),
      selectedSquare: null,
    };
  }

  handleClick = (i) => {
    console.log(i)
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

  renderSquare(loc) {
    var sqNumber = this.locationToSqNumber(loc)
    return <Square
      key={loc.row + loc.col}
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
  <div className="chess">
    <header className="chess-header">
      <h1 className="chess-title">AE Studio - Chess Knight Challenge</h1>
    </header>
    <div className="chessboard">
      <Board />
    </div>
  </div>
)
