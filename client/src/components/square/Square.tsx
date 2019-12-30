import * as React from 'react'
import './square.scss'


export const Square = (props) => {
  return (
    <td>
      <button
        className={`square square-button ${props.highlight ? 'square-highlight' : ''}`}
        onClick={props.onClick} >
        {props.value}
      </button >
    </td>
  )
}
