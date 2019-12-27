import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'

import Board from './Board'

configure({ adapter: new Adapter() })

describe(`<Board />`, () => {
  let mockFn = jest.fn()
  let squareIdxList = Array(64).fill(null)
  let possiblePosIdxList = Array(64).fill(null)

  it('renders', () => {
    const boardComponent = shallow(<Board selectSquare={mockFn}
      getKnight={mockFn} squareIdxList={squareIdxList}
      possiblePosIdxList={possiblePosIdxList} />)

    expect(boardComponent.exists()).toBeTruthy()
  })
})
