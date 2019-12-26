import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'

import Square from './Square'

configure({ adapter: new Adapter() })

describe(`<Square />`, () => {
  it('renders', () => {
    const loc = { row: 8, col: 'A' }
    const squareComponent = shallow(<Square loc={loc} />)

    expect(squareComponent.exists()).toBeTruthy()
  })
})
