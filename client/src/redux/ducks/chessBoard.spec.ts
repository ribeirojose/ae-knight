import { chessBoard, initialState, buildIdxList, selectSquare, setHelpShow } from './chessBoard'

describe('chessBoard duck', () => {
  describe(('select square'), () => {
    let succeededState = { ...initialState, selectedSquareIdx: 0, squareIdxList: buildIdxList(0) }

    it('returns "knight" payload in case of success', async () => {
      const succeededReducer = chessBoard(initialState, { type: selectSquare, payload: { selectedSquareIdx: 0 } })

      expect(succeededReducer).toEqual(succeededState)
    })

  })

  describe(('toggle help'), () => {
    let succeededState = { ...initialState, helpShow: true }

    const succeededReducer = chessBoard(initialState, { type: setHelpShow, payload: true })

    expect(succeededReducer).toEqual(succeededState)

  })
})
