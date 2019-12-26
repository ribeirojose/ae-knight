import zipWith from 'lodash/zipWith';
import flatten from 'lodash/flatten';

const cols = "ABCDEFGH".split("")
const rows = [...Array(8).keys()].map((el) => (el + 1)).reverse()

const toAlgebraic = (idxArr, arr) => idxArr.map((idx) => arr[idx]).filter(Boolean)

const findCombinations = (vOptions, hOptions) => vOptions.reduce((acc, curr) =>
  acc.concat(
    hOptions.map((val) => val + curr)
  )
  , []
)

export const findNextTurn = (currentPosition: string) => {
  let colIdx = cols.indexOf(currentPosition[0])
  let rowIdx = rows.indexOf(parseInt(currentPosition.slice(1)))

  let hValid = [[colIdx + 1, colIdx - 1], [colIdx + 2, colIdx - 2]].map(subArr => toAlgebraic(subArr, cols))
  let vValid = [[rowIdx + 2, rowIdx - 2], [rowIdx + 1, rowIdx - 1]].map(subArr => toAlgebraic(subArr, rows))

  let nextTurn = flatten(zipWith(vValid, hValid, findCombinations))

  return nextTurn
}

export const positionInvalid = (currentPosition: string) => {
  let colIdx = cols.indexOf(currentPosition[0])
  let rowIdx = rows.indexOf(parseInt(currentPosition.slice(1)))

  let positionInvalid = [colIdx, rowIdx]
    .map((val) => val === -1)
    .reduce((prev, curr) => curr || prev)

  return positionInvalid
}
