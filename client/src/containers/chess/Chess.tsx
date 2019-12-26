import * as React from 'react'
import '../../config'
import './chess.scss'
import Board from './board/Board'

export const Chess = () => (
  <div className="container">
    <header className="chessboard-header">
      <h1 className="chessboard-title">AE Studio - Chess Knight Challenge</h1>
    </header>
    <div className="chessboard">
      <Board />
    </div>
  </div>
)

