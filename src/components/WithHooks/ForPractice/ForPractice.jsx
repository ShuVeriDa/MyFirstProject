import { useState } from "react"
import classes from './ForPractice.module.css'

const ForPractice = () => {
  const [checked, setChecked] = useState(false)
  let message
  if (checked) {
    message = <div>
      <h2>Ура, вам уже есть 18</h2>
      <p>здесь расположен контент только для взрослых</p>
    </div>
  } else {
    message = <div>
      <p>Увы, вам еще нет 18:(</p>
    </div>
  }
 
  return (
    <div className={classes.ForPractice}>
      <p>"Вам действительно 18 лет?"</p>
      <input type="checkbox" onChange={() => setChecked(!checked)}/>
      {message}
    </div>
  )
}

export {ForPractice}