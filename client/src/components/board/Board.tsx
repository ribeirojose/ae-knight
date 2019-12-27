import * as React from 'react'
import '../../config'
import './board.scss'
import Square from '../square/Square'

const cols = "ABCDEFGH".split("")
const rows = [...Array(8).keys()].map((el) => (el + 1)).reverse()

export default (props) => {
  const handleClick = async (idx) => {
    props.selectSquare({ selectedSquareIdx: idx })
    props.getKnight(squareIdxToAlgebraic(idx), 2)
  }

  const renderSquare = (loc) => {
    var squareIdx = squareAlgebraicToIdx(loc)

    return <Square
      key={loc}
      value={props.squareIdxList[squareIdx]}
      highlight={props.possiblePosIdxList[squareIdx]}
      onClick={() => handleClick(squareIdx)} />
  }

  return (
    <div className='mt-5'>
      {rows.map((row) => {
        return (
          <div className={`board-row board-row-${row % 2 === 0 ? 'even' : 'odd'}`} key={row}>
            {cols.map((col) => renderSquare(`${col}` + row))}
          </div>
        )
      })}
    </div>
  )
}

export const squareAlgebraicToIdx = (loc) => {
  return ((parseInt(loc.slice(1)) - 1) * 8) + cols.indexOf(loc[0])
}

export const squareIdxToAlgebraic = (idx) => {
  return cols[idx % 8] + `${Math.floor(idx / 8) + 1}`
}

