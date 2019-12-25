import { handleActions } from 'redux-actions'
import { createActionThunk } from 'redux-thunk-actions'

import { getKnightNTurn } from '../../../api/knight/get-turn'

export const initialState = {
  knightTurns: null,
  loading: false,
  error: null,
}

export const getKnight = createActionThunk('GET_KNIGHT',
  (currentPosition, turnNumber) => getKnightNTurn(currentPosition, turnNumber))

export const knight = handleActions(
  {
    [getKnight.STARTED]: (state) => ({
      ...state,
      loading: true,
    }),
    [getKnight.SUCCEEDED]: (state, action) => ({
      ...state,
      me: action.payload.me,
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
