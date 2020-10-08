import React from 'react'

const Counter = ({value = 0, dispatch, foo, bar}) =>
    <div>
      <span>{value}, squared: {foo}</span>
      <button onClick={e => {
        dispatch({type: 'plus'})
      }}
      > + </button>
      <button onClick={e => {
        dispatch({type: 'minus'})
      }}
      > - </button>
    </div>
export default Counter