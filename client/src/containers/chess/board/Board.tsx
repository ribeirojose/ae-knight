import * as React from 'react'
import '../../../config'
import './board.scss'
import { Square } from '../square/Square'
import { getKnightNTurn } from '../../../api/knight/get-n-turn'

interface Props { }
interface State {
  squares: Array<string>,
  selectedSquare: string,
  highlightedSquares: Array<boolean>
}

export class Board extends React.Component<Props, State> {
  static readonly cols = "ABCDEFGH".split("")
  static readonly rows = [...Array(8).keys()].map((el) => (el + 1)).reverse()

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(64).fill(null),
      selectedSquare: null,
      highlightedSquares: Array(64).fill(null),
    };
  }

  handleClick = async (i) => {
    const squares = Array(64).fill(null);
    squares[i] = "♞"
    this.setState({
      squares: squares,
      selectedSquare: i,
    });
    const response = await getKnightNTurn(this.sqNumberToLocation(i), 2)

    const possibleNextTurns = response.data

    const highlightedSquares = this.algebraicTurnsToMatrix(possibleNextTurns)

    this.setState({
      squares: squares,
      selectedSquare: i,
      highlightedSquares: highlightedSquares,
    });
  }

  algebraicTurnsToMatrix = x => x.reduce((acc, el) => {
    acc[this.locationToSqNumber(el)] = true;
    return acc
  }, Array(64).fill(null))

  locationToSqNumber = (loc) => {
    return ((parseInt(loc.slice(1)) - 1) * 8) + Board.cols.indexOf(loc[0])
  }

  sqNumberToLocation = (idx) => {
    return Board.cols[idx % 8] + `${Math.floor(idx / 8) + 1}`
  }

  renderSquare(loc) {
    var sqNumber = this.locationToSqNumber(loc)
    return <Square
      key={loc}
      value={this.state.squares[sqNumber]}
      highlight={this.state.highlightedSquares[sqNumber]}
      onClick={() => this.handleClick(sqNumber)} />;
  }

  render() {
    return (
      Board.rows.map((row) => {
        return (
          <div className={`board-row board-row-${row % 2 === 0 ? 'even' : 'odd'}`} key={row}>
            {Board.cols.map((col) => this.renderSquare(`${col}` + row))}
          </div>
        )
      })
    )
  }
}
