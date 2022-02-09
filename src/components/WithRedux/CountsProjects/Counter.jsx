import React from 'react';
import classes from './Counter.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../../store/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

  return (
    <div>
        <div className={classes.Counter}>
            <h1>Counter:</h1>
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
            <span>{count}</span>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
        </div>
    </div>
  )
}

export {Counter};
