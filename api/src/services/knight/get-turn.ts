import union from 'lodash/union'
import { findNextTurn } from './position-helper'

export const getKnightNTurn = (currentPosition, nTurns) => {
  if (nTurns === 1) return findNextTurn(currentPosition)

  return union(...findNextTurn(currentPosition).map((el) => getKnightNTurn(el, nTurns - 1)))
}
