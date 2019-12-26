import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'

import Nav from './Nav'

configure({ adapter: new Adapter() })

describe(`<Nav />`, () => {
  it('renders', () => {
    const navComponent = shallow(<Nav />)

    expect(navComponent.exists()).toBeTruthy()
  })
})
