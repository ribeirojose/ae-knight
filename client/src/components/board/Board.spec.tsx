import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import { initialState } from '../../redux/ducks/chess'

import Board from './Board'

configure({ adapter: new Adapter() })

describe(`<Board />`, () => {

  it('renders', () => {
    const boardComponent = shallow(<Board {...initialState} />)

    expect(boardComponent.exists()).toBeTruthy()
  })
})
