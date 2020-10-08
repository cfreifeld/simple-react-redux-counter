import React from 'react'

const Counter = ({value = 0, squared, plus, minus}) =>
    <div>
      <span>{value}, squared: {squared}</span>
      <button onClick={plus}
      > + </button>
      <button onClick={minus}
      > - </button>
    </div>
export default Counter