import { flatten, zipWith } from 'lodash';

export const cols = "ABCDEFGH".split("")
export const rows = [...Array(8).keys()].map((el) => (el + 1)).reverse()

export const toAlgebraic = (idxArr, Arr) => idxArr.map((idx) => Arr[idx]).filter(Boolean)

export const findCombinations = (vOptions, hOptions) => vOptions.reduce((acc, curr) =>
  acc.concat(
    hOptions.map((val) => val + curr)
  )
  , []
)

export const findNextTurn = (currentPosition) => {
  const colIdx = cols.indexOf(currentPosition[0])
  const rowIdx = rows.indexOf(parseInt(currentPosition.slice(1)))

  const hValid = [[colIdx + 1, colIdx - 1], [colIdx + 2, colIdx - 2]].map(subArr => toAlgebraic(subArr, cols))
  const vValid = [[rowIdx + 2, rowIdx - 2], [rowIdx + 1, rowIdx - 1]].map(subArr => toAlgebraic(subArr, rows))

  const nextTurn = flatten(zipWith(vValid, hValid, findCombinations))

  return nextTurn
}

export const positionInvalid = (currentPosition) => {
  const colIdx = cols.indexOf(currentPosition[0])
  const rowIdx = rows.indexOf(parseInt(currentPosition.slice(1)))

  const positionInvalid = [colIdx, rowIdx]
    .map((val) => val === -1)
    .reduce((prev, curr) => curr || prev)

  return positionInvalid
}
