import * as React from 'react'
import '../../../config'
import './square.scss'


export function Square(props) {
  return (
    <button
      className={`square square-button ${props.highlight ? 'square-highlight' : ''}`}
      onClick={props.onClick} >
      {props.value}
    </button >
  );
}
