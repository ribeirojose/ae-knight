import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { chessBoard } from './ducks/chessBoard'
import { knight } from './ducks/knight'

const ducks = combineReducers({
  knight,
  chessBoard
})

const configureStore = () => createStore(ducks, composeWithDevTools(applyMiddleware(thunk)))

export { configureStore }
