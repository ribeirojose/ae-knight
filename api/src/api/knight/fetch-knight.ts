import { getKnightNTurn } from '../../services/knight/get-n-turn'
import { positionInvalid } from '../../services/knight/position-helper'

export const fetchKnight = (req, res) => {
  const { currentPosition, turnNumber } = req.query

  if (positionInvalid(currentPosition)) {
    return res.status(400).send({ 'error': 'Invalid position.' })
  }
  const possiblePositionList = getKnightNTurn(currentPosition, turnNumber)

  return res.status(200).send({ 'data': possiblePositionList })
}
