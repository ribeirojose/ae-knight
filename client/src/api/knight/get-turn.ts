import axios from 'axios'

export const getKnightNTurn = async (currentPosition) => {
  const { data } = await axios({
    method: 'get',
    url: '/knight',
    params: {
      currentPosition
    }
  })

  return data
}
