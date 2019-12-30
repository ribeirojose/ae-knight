import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'

import { algebraicToIdxList, getKnight, initialState, knight } from './knight'

describe('knight duck', () => {
  let store
  let httpMock

  beforeEach(() => {
    httpMock = new MockAdapter(axios)
    const mockStore = configureMockStore()
    store = mockStore(initialState)
  })

  describe('get knight', () => {
    describe('calling the action', () => {
      it('returns "knight" payload in case of success', async () => {
        const knightPayload = {
          possiblePosAlgebraicArr: ['B3', 'C2'],
        }

        httpMock.onGet('/knight').reply(200, knightPayload)

        await getKnight('A1', 2)(store.dispatch)

        const executedActions = store.getActions()
        const succeededPayload = executedActions.find((action) => action.type === getKnight.SUCCEEDED)

        expect(executedActions.map((action) => action.type)).toEqual([getKnight.STARTED, getKnight.SUCCEEDED, getKnight.ENDED])
        expect(succeededPayload).toEqual({
          type: getKnight.SUCCEEDED,
          payload: knightPayload
        })
      })

      it('when receiving a bad request returns error payload', async () => {
        httpMock.onGet('/knight').reply(400, {
          error: 'OPS',
        })

        await getKnight()(store.dispatch)

        const executedActions = store.getActions()
        const failedPayload = executedActions.find((action) => action.type === getKnight.FAILED)

        expect(executedActions.map((action) => action.type)).toEqual([getKnight.STARTED, getKnight.FAILED, getKnight.ENDED])
        expect(failedPayload).toEqual({
          type: getKnight.FAILED,
          payload: { error: 'OPS' },
        })
      })
    })

    describe('reducer', () => {
      const startedState = { ...initialState, loading: true }
      const succeededState = { ...startedState, possiblePosAlgebraicArr: ['B3', 'C2'], possiblePosIdxArr: algebraicToIdxList(['B3', 'C2']) }

      it('activates loading on start reducer', async () => {
        const startReducer = knight(initialState, { type: getKnight.STARTED })

        expect(startReducer).toEqual(startedState)
      })

      it('adds "knight" data when it succeeds', async () => {
        const succeededReducer = knight(startedState, { type: getKnight.SUCCEEDED, payload: { possiblePosAlgebraicArr: ['B3', 'C2'] } })

        expect(succeededReducer).toEqual(succeededState)
      })

      it('adds error data when it fails', async () => {
        const failedReducer = knight(startedState, { type: getKnight.FAILED, payload: { error: 'OPS' } })

        expect(failedReducer).toEqual({ ...initialState, error: 'OPS' })
      })

      it('sets loading equals to false when it ends', async () => {
        const succeededReducer = knight(succeededState, { type: getKnight.ENDED, payload: { possiblePosAlgebraicArr: ['B3', 'C2'] } })

        expect(succeededReducer).toEqual({ ...succeededState, loading: false, error: null })
      })
    })
  })
})
