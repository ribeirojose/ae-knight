import { getKnightNTurn } from '../../../../src/services/knight/get-turn'

describe('get correct knight turns', () => {
  it('get positions for next possible turn', async () => {
    const possibleTurns = getKnightNTurn('A1', 1)

    expect(possibleTurns).toEqual(['B3', 'C2'])
  })

  it('get positions for second possible turn', async () => {
    const possibleTurns = getKnightNTurn('A1', 2)

    expect(possibleTurns).toEqual(['C1', 'A1', 'C5', 'A5', 'D2', 'D4', 'B4', 'E1', 'E3', 'A3'])
  })
})
