import { apiRequest } from '../../spec-helper'

describe('root route get', () => {
  it('returns error when passing no params', async () => {
    const { status } = await apiRequest.get('/api/knight')

    expect(status).toEqual(400)
  })

  it('returns error when passing an invalid position', async () => {
    const { status } = await apiRequest.get('/api/knight?currentPosition=A13&turnNumber=2')
    expect(status).toEqual(400)
  })

  it('returns possible turns when passing a valid position', async () => {
    const { status, body } = await apiRequest.get('/api/knight?currentPosition=A1&turnNumber=1')

    expect(status).toEqual(200)
    expect(body.possiblePosAlgebraicArr).toEqual(['B3', 'C2'])
  })
})
