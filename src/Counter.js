import React from 'react'
import { Subscribe } from 'unstated'

import CounterContainer from './containers/counter'

const Counter = () => {
  return (
    <Subscribe to={[CounterContainer]}>
      {counterContainer => (
        <div>
          <div>
            Count: { counterContainer.state.count }
          </div>
          <button onClick={counterContainer.increment}>Increment</button>
          <button onClick={counterContainer.decrement}>Decrement</button>
          <button onClick={counterContainer.incrementBy3}>Increment By 3</button>
        </div>
      )}
    </Subscribe>
  )
}

export default Counter