import { createAction, handleActions } from 'redux-actions'

export const initialState = {
  squareIdxList: Array(64).fill(null),
  selectedSquareIdx: null,
  helpShow: false,
}

export const selectSquare = createAction('SELECT_SQUARE')
export const setHelpShow = createAction('TOGGLE_HELP')

export const chessBoard = handleActions(
  {
    [selectSquare]: (state, action) => ({
      ...state,
      selectedSquareIdx: action.payload.selectedSquareIdx,
      squareIdxList: buildIdxList(action.payload.selectedSquareIdx)
    }),
    [setHelpShow]: (state, action) => ({
      ...state,
      helpShow: action.payload,
    })
  },
  initialState,
)

export const buildIdxList = selectedIdx => {
  let arr = Array(64).fill(null)
  arr.splice(selectedIdx, 1, '♞')

  return arr
}
