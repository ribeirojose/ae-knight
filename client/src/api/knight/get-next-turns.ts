import axios from 'axios'

export const getKnightNextTurns = async (currentPosition, turnsToPredict) => {
  const { data } = await axios({
    method: 'get',
    url: '/knight',
    params: {
      currentPosition: currentPosition,
      turnsToPredict: turnsToPredict
    }
  })

  return { possibleNextTurns: data }
}
