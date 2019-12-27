import { getKnightNTurn } from '../../services/knight/get-turn'
import { positionInvalid } from '../../services/knight/position-helper'

export const fetchKnight = (req, res) => {

  const { currentPosition, turnNumber } = req.query

  if (Object.keys(req.query).length === 0) {
    return res.status(400).send({ 'error': 'Please insert a position.' })
  }

  if (positionInvalid(currentPosition)) {
    return res.status(400).send({ 'error': 'Invalid position.' })
  }

  const possiblePosAlgebraicList = getKnightNTurn(currentPosition, parseInt(turnNumber))

  return res.status(200).send({ 'possiblePosAlgebraicList': possiblePosAlgebraicList })
}
