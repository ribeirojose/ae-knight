import * as React from 'react'
import '../../config'
import './board.scss'
import Square from '../square/Square'

export const squareAlgebraicToIdx = (loc, cols) => {
  return ((parseInt(loc.slice(1)) - 1) * 8) + cols.indexOf(loc[0])
}

export const squareIdxToAlgebraic = (idx, cols) => {
  return cols[idx % 8] + `${Math.floor(idx / 8) + 1}`
}

export default (props) => {
  const handleClick = async (i) => {
    props.selectSquare({ selectedSquare: i })
    props.getKnight(squareIdxToAlgebraic(i, props.cols), 2)
  }

  const renderSquare = (loc) => {
    var squareIdx = squareAlgebraicToIdx(loc, props.cols)
    return <Square
      key={loc}
      value={props.squares[squareIdx]}
      highlight={props.highlightedSquares[squareIdx]}
      onClick={() => handleClick(squareIdx)} />
  }

  return (
    <div className='mt-5'>
      {props.rows.map((row) => {
        return (
          <div className={`board-row board-row-${row % 2 === 0 ? 'even' : 'odd'}`} key={row}>
            {props.cols.map((col) => renderSquare(`${col}` + row))}
          </div>
        )
      })}
    </div>
  )
}

