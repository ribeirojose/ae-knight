import clone from 'lodash.clone'

import { apiRequest, clearTestData } from '../../spec-helper'

describe('root route get', () => {
  afterEach(async () => {
    await clearTestData()
  })

  it('returns unauthorized status when not passing an authorized token', async () => {
    const { status } = await apiRequest.get('/api/knight')

    expect(status).toEqual(500)
  })
})
