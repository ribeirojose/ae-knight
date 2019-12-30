import { buildIdxList, chessBoard, initialState, selectSquare, setHelpShow } from './chessBoard'

describe('chessBoard duck', () => {
  describe(('select square'), () => {
    const succeededState = { ...initialState, selectedSquareIdx: 0, squareIdxList: buildIdxList(0) }

    it('returns "knight" payload in case of success', async () => {
      const succeededReducer = chessBoard(initialState, { type: selectSquare, payload: { selectedSquareIdx: 0 } })

      expect(succeededReducer).toEqual(succeededState)
    })

  })

  describe(('toggle help'), () => {
    const succeededState = { ...initialState, helpShow: true }

    const succeededReducer = chessBoard(initialState, { type: setHelpShow, payload: true })

    expect(succeededReducer).toEqual(succeededState)

  })
})
