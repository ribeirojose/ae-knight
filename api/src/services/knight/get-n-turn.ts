import { findNextTurn } from './position-helper'
import { flatten } from 'lodash';

export const getKnightNTurn = (currentPosition, nTurns) => {
  if (nTurns === 1) return findNextTurn(currentPosition)
  return [...new Set(
    flatten(
      findNextTurn(currentPosition)
        .map((el) => getKnightNTurn(el, nTurns - 1))
    )
  )]
}
