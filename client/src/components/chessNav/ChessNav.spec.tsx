import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'

import { ChessNav } from './ChessNav'

configure({ adapter: new Adapter() })

describe(`<Nav />`, () => {
  const mockFn = jest.fn()

  it('renders', () => {
    const navComponent = shallow(<ChessNav setHelpShow={mockFn} helpShow={false} />)

    expect(navComponent.exists()).toBeTruthy()
  })
})
