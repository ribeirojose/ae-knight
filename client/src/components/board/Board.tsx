import * as React from 'react'
import '../../config'
import './board.scss'
import Square from '../square/Square'
import Table from 'react-bootstrap/Table'

const cols = "ABCDEFGH".split("")
const rows = [...Array(8).keys()].map((el) => (el + 1)).reverse()

export default (props) => {
  const handleClick = async (idx) => {
    props.selectSquare({ selectedSquareIdx: idx })
    props.getKnight(squareIdxToAlgebraic(idx), 2)
  }

  const renderSquare = (loc) => {
    const squareIdx = squareAlgebraicToIdx(loc)

    return <Square
      key={loc}
      value={props.squareIdxList[squareIdx]}
      highlight={props.possiblePosIdxList[squareIdx]}
      onClick={() => handleClick(squareIdx)} />
  }

  return (
    <Table responsive borderless={true} className='mt-5 align-self-center'  >
      <tbody>
        {rows.map((row) => {
          return (
            <tr className={`board-row board-row-${row % 2 === 0 ? 'even' : 'odd'}`} key={row}>
              {cols.map((col) => renderSquare(`${col}` + row))}
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export const squareAlgebraicToIdx = (loc) => {
  return ((parseInt(loc.slice(1)) - 1) * 8) + cols.indexOf(loc[0])
}

export const squareIdxToAlgebraic = (idx) => {
  return cols[idx % 8] + `${Math.floor(idx / 8) + 1}`
}

