import { useState } from "react"
import classes from './ForPractice.module.css'

const ForPractice = () => {
  const [checked, setChecked] = useState(false)
  let message
  if (checked) {
    message = <div>
      <h2>Текст отображается</h2>
    </div>
  } else {
    message = null
  }
 
  return (
    <div className={classes.ForPractice}>
      <p>Отобразить / скрыть текст</p>
      <input type="checkbox" onChange={() => setChecked(!checked)}/>
      {message}
    </div>
  )
}

export {ForPractice}