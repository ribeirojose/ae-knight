import axios from 'axios'

export const getKnightNTurn = async (currentPosition, turnNumber) => {
  const { data } = await axios({
    method: 'get',
    url: '/knight',
    params: {
      currentPosition,
      turnNumber
    }
  })

  return data
}
