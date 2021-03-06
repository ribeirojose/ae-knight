import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'

import { Board } from './Board'

configure({ adapter: new Adapter() })

describe(`<Board />`, () => {
  const mockFn = jest.fn()
  const squareIdxList = Array(64).fill(null)
  const possiblePosIdxArr = Array(64).fill(null)

  it('renders', () => {
    const boardComponent = shallow(<Board selectSquare={mockFn}
      getKnight={mockFn} squareIdxList={squareIdxList}
      possiblePosIdxArr={possiblePosIdxArr} />)

    expect(boardComponent.exists()).toBeTruthy()
  })
})
