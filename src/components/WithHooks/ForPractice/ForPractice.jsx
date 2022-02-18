import { useState } from "react"
import classes from './ForPractice.module.css'

const ForPractice = () => {
 const [checked, setChecked] = useState(false)

 let message;
 if (checked) {
   message = <p>Здравствуйте</p>
 } else {
  message = <p>Прощайте</p>
 }
 
  return (
    <div className={classes.ForPractice}>
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
      <p>{message}</p>
    </div>
  )
}

export {ForPractice}