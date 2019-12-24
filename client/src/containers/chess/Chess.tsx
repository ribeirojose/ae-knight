import * as React from 'react'
import '../../config'
import './chess.scss'

class Square extends React.Component {
  render() {
    return (
      <button className="square"> </button>
    )
  }
}

export const Chess = () => (
  <div className="chess">
    <header className="chess-header">
      <h1 className="chess-title">AE Studio - Chess Knight Challenge</h1>
    </header>
  </div>
)
