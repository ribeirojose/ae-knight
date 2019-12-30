import zipWith from 'lodash/zipWith';
import union from 'lodash/union';

const cols = "ABCDEFGH".split("")
const rows = [...Array(8).keys()].map((el) => (el + 1)).reverse()

const getArrIdx = (algebraicPosition) => {
  const _row = parseInt(algebraicPosition.slice(1))
  const _col = algebraicPosition[0]

  const colIdx = cols.indexOf(_col)
  const rowIdx = rows.indexOf(_row)
  return { colIdx: colIdx, rowIdx: rowIdx }
}

export const findAlgebraic = (idxArr, arr) => idxArr.map((idx) => arr[idx]).filter(Boolean)

export const findCombinations = (rowNames, colNames) => rowNames.reduce((acc, rowName) =>
  acc.concat(
    colNames.map((colName) => colName + rowName)
  )
  , []
)

export const findNextTurn = (currentPosition) => {
  const { colIdx, rowIdx } = getArrIdx(currentPosition)

  const colPossible = [[colIdx + 1, colIdx - 1], [colIdx + 2, colIdx - 2]].map(subArr => findAlgebraic(subArr, cols))
  const rowPossible = [[rowIdx + 2, rowIdx - 2], [rowIdx + 1, rowIdx - 1]].map(subArr => findAlgebraic(subArr, rows))

  const nextTurn = union(...zipWith(rowPossible, colPossible, findCombinations))

  return nextTurn
}

export const positionInvalid = (currentPosition) => {
  const { colIdx, rowIdx } = getArrIdx(currentPosition)

  const posInvalid = [colIdx, rowIdx]
    .map((val) => val === -1)
    .reduce((prev, curr) => curr || prev)

  return posInvalid
}
