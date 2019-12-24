import { flatten, zipWith } from 'lodash';

const cols = "ABCDEFGH".split("")
const rows = [...Array(8).keys()].map((el) => (el + 1)).reverse()


const findNextTurn = (currentPosition) => {
  const colIdx = cols.indexOf(currentPosition[0])
  const rowIdx = rows.indexOf(parseInt(currentPosition.slice(1)))

  var toAlgebraic = (idxArr, Arr) => idxArr.map((idx) => Arr[idx]).filter(Boolean)

  var findCombinations = (vOptions, hOptions) => vOptions.reduce((acc, curr) =>
    acc.concat(
      hOptions.map((val) => val + curr)
    )
    , []
  )

  const hValid = [[colIdx + 1, colIdx - 1], [colIdx + 2, colIdx - 2]].map(subArr => toAlgebraic(subArr, cols))
  const vValid = [[rowIdx + 2, rowIdx - 2], [rowIdx + 1, rowIdx - 1]].map(subArr => toAlgebraic(subArr, rows))

  const nextTurn = flatten(zipWith(hValid, vValid, findCombinations))

  return nextTurn
}

export const getKnightNextTurns = (currentPosition) => {
  const colIdx = cols.indexOf(currentPosition[0])
  const rowIdx = rows.indexOf(parseInt(currentPosition.slice(1)))

  const positionInvalid = [colIdx, rowIdx]
    .map((val) => val === -1)
    .reduce((prev, curr) => curr || prev)

  if (positionInvalid) { return }

  const possibleNextTurns = findNextTurn(currentPosition).reduce((acc, val) => { return acc.concat(val).concat(findNextTurn(val)) }, [])

  return possibleNextTurns
}
