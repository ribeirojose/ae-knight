import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'

import Chess from './Chess'

configure({ adapter: new Adapter() })

describe(`<Chess />`, () => {
  it('renders', () => {
    const chessComponent = shallow(<Chess />)

    expect(chessComponent.exists()).toBeTruthy()
  })
})
