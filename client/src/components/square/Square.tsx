import * as React from 'react'
import './square.scss'


export default (props) => {
  return (
    <button
      className={`square square-button ${props.highlight ? 'square-highlight' : ''}`}
      onClick={props.onClick} >
      {props.value}
    </button >
  )
}
