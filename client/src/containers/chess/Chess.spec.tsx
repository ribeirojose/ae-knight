import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import configureMockStore from 'redux-mock-store'

import { initialState } from '../../redux/ducks/chess'

import { ChessComponent } from './Chess'

configure({ adapter: new Adapter() })

describe(`<Chess />`, () => {
  let store

  beforeEach(() => {
    const mockStore = configureMockStore()
    store = mockStore(initialState)
  })

  it('renders', () => {
    const chessComponent = shallow(<ChessComponent {...store} />)

    expect(chessComponent.exists()).toBeTruthy()
  })
})
