import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'

import { getKnight, initialState, knight } from './get-turn'

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
          first_name: 'HELLO WORLD',
        }

        httpMock.onGet('/knight').reply(200, knightPayload)

        await getKnight()(store.dispatch)

        const executedActions = store.getActions()
        const succeededPayload = executedActions.find((action) => action.type === getKnight.SUCCEEDED)

        expect(executedActions.map((action) => action.type)).toEqual([getKnight.STARTED, getKnight.SUCCEEDED, getKnight.ENDED])
        expect(succeededPayload).toEqual({
          type: getKnight.SUCCEEDED,
          payload: { knight: knightPayload },
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
      let startedState = { knight: {}, loading: true, error: null }
      let succeededState = { knight: { name: 'AEboilerplate' }, loading: true, error: null }

      it('activates loading on start reducer', async () => {
        const startReducer = knight(initialState, { type: getKnight.STARTED })

        expect(startReducer).toEqual(startedState)
      })

      it('adds "knight" data when it succeeds', async () => {
        const succeededReducer = knight(startedState, { type: getKnight.SUCCEEDED, payload: { knight: { name: 'AEboilerplate' } } })

        expect(succeededReducer).toEqual(succeededState)
      })

      it('adds error data when it fails', async () => {
        const failedReducer = knight(startedState, { type: getKnight.FAILED, payload: { error: 'OPS' } })

        expect(failedReducer).toEqual({ error: 'OPS', loading: false, knight: {} })
      })

      it('sets loading equals to false when it ends', async () => {
        const succeededReducer = knight(succeededState, { type: getKnight.ENDED, payload: { knight: { name: 'AEboilerplate' } } })

        expect(succeededReducer).toEqual({ knight: { name: 'AEboilerplate' }, loading: false, error: null })
      })
    })
  })
})
