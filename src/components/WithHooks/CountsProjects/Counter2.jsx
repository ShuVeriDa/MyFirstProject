import { useState } from 'react';
import classes from './Counter2.module.css'

const Counter2 = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <div className={classes.Counter2}>
          <h1>Counter:</h1>
          <button
            aria-label="Decrement value"
            onClick={decrement}
          >
            Decrement
          </button>
          <span>{count}</span>
          <button
            aria-label="Increment value"
            onClick={increment}
          >
            Increment
          </button>
      </div>
    </div>
  )
}

export {Counter2};
