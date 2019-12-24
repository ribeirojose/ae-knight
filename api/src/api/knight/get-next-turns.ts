import { getKnightNextTurns } from '../../services/knight/get-next-turns'

export const fetchKnight = (req, res) => {
  const { currentPosition, turnsToPredict } = req.query
  const positionMatrix = getKnightNextTurns(currentPosition, turnsToPredict)

  return res.status(200).send({ 'data': positionMatrix })
}
