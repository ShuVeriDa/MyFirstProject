import { useState } from "react"
import classes from './ForPractice.module.css'

const ForPractice = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }
  return (
    <div className={classes.ForPractice}>
        <button onClick={decrement}>decrement</button>
        {count}
        <button onClick={increment}>increment</button>
    </div>
  )
}

export {ForPractice}