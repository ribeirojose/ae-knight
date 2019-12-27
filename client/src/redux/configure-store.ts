import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { knight } from './ducks/knight'
import { chessBoard } from './ducks/chessBoard'

const ducks = combineReducers({
  knight,
  chessBoard
})

const configureStore = () => createStore(ducks, composeWithDevTools(applyMiddleware(thunk)))

export { configureStore }
