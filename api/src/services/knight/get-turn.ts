import { findNextTurn } from './position-helper'
import union from 'lodash/union'

export const getKnightNTurn = (currentPosition, nTurns) => {
  if (nTurns === 1) return findNextTurn(currentPosition)
  return union(...findNextTurn(currentPosition)
    .map((el) => getKnightNTurn(el, nTurns - 1)))
}
