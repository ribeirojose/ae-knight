import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'

import Help from './Help'

configure({ adapter: new Adapter() })

describe(`<Help />`, () => {
  it('renders', () => {
    const helpComponent = shallow(<Help />)

    expect(helpComponent.exists()).toBeTruthy()
  })
})
