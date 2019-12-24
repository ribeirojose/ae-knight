import { apiRequest, clearTestData } from '../../../spec-helper'
import { getKnightNTurn } from '../../../../src/services/knight/get-n-turn'

describe('get correct knight turns', () => {
  afterEach(async () => {
    await clearTestData()
  })

  it('1', async () => {
    const possibleTurns = getKnightNTurn('A1', 1)

    expect(possibleTurns).toEqual(['B3', 'C2'])
  })

  it('2', async () => {
    const possibleTurns = getKnightNTurn('A1', 2)

    expect(possibleTurns).toEqual([
      'C1', 'A1',
      'C5', 'A5',
      'D2', 'D4',
      'B4', 'E1',
      'E3', 'A3'
    ])
  })
})
