import { handleActions } from 'redux-actions'
import { createActionThunk } from 'redux-thunk-actions'

import { getKnightNTurn } from '../../api/knight/get-turn'
import { squareAlgebraicToIdx } from '../../components/board/Board'

export const initialState = {
  possiblePosAlgebraicList: null,
  possiblePosIdxList: Array(64).fill(null),
  loading: false,
  error: null,
}

export const getKnight = createActionThunk('GET_KNIGHT', getKnightNTurn)

export const knight = handleActions(
  {
    [getKnight.STARTED]: (state) => ({
      ...state,
      loading: true,
    }),
    [getKnight.SUCCEEDED]: (state, action) => ({
      ...state,
      possiblePosAlgebraicList: action.payload.possiblePosAlgebraicList,
      possiblePosIdxList: algebraicToIdxList(action.payload.possiblePosAlgebraicList),
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
  },
  initialState,
)

export const algebraicToIdxList = arr => arr.reduce((acc, el) => {
  acc[squareAlgebraicToIdx(el)] = true;
  return acc
}, Array(64).fill(null))
