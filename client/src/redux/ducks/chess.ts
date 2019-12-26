import { createAction, handleActions } from 'redux-actions'
import { createActionThunk } from 'redux-thunk-actions'

import { getKnightNTurn } from '../../api/knight/get-turn'

export const initialState = {
  cols: "ABCDEFGH".split(""),
  rows: [...Array(8).keys()].map((el) => (el + 1)).reverse(),
  squares: Array(64).fill(null),
  selectedSquare: null,
  highlightedSquares: Array(64).fill(null),
  possiblePositions: null,
  loading: false,
  error: null,
}
const algebraicToSqNumber = (loc) => {
  return ((parseInt(loc.slice(1)) - 1) * 8) + initialState.cols.indexOf(loc[0])
}

const algebraicTurnsToMatrix = x => x.reduce((acc, el) => {
  acc[algebraicToSqNumber(el)] = true;
  return acc
}, Array(64).fill(null))

const buildSquareList = selectedIdx => {
  let arr = Array(64).fill(null)
  arr.splice(selectedIdx, 1, "♞")
  return arr
}

export const getKnight = createActionThunk('GET_KNIGHT', getKnightNTurn)
export const selectSquare = createAction('SELECT_SQUARE')

export const knight = handleActions(
  {
    [getKnight.STARTED]: (state) => ({
      ...state,
      loading: true,
    }),
    [getKnight.SUCCEEDED]: (state, action) => ({
      ...state,
      possiblePositions: action.payload.possiblePositions,
      highlightedSquares: algebraicTurnsToMatrix(action.payload.possiblePositions),
    }),
    [getKnight.FAILED]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.error,
    }),
    [getKnight.ENDED]: (state) => ({
      ...state,
      loading: false,
    }),
    [selectSquare]: (state, action) => ({
      ...state,
      selectedSquare: action.payload.selectedSquare,
      squares: buildSquareList(action.payload.selectedSquare)
    })
  },
  initialState,
)
