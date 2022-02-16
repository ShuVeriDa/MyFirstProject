import { useState } from "react"
import classes from './ForPractice.module.css'

const ForPractice = () => {
  const [name, setName] = useState('Введите ваше имя')
  const [lastName, setLastName] = useState('Введите вашу фамилию')
  const [age, setAge] = useState('Введите ваш возраст')
  const [ban, setBan] = useState(true)

  const clickHandlerName = () => {
    setName('Muhammad')
  } 

  const clickHandlerLastName = () => {
    setLastName('Bashtarov')
  } 

  const clickHandlerAge = () => {
    setAge(27)
  } 



  return (
    <div className={classes.ForPractice}>
      <p>Name: {name} <button onClick={clickHandlerName}>Change Name</button></p>
      <p>LastName: {lastName} <button onClick={clickHandlerLastName}>Change LastName</button></p>
      <p>
        Age: {age}  
        <button onClick={clickHandlerAge}>Change Age</button>
        <button onClick={() => setAge(age + 1)}>+1</button>
        <button onClick={() => setAge(age - 1)}>-1</button>
      </p>
      <button onClick={() => setBan(false)}>Забанить</button> 
      <button onClick={() => setBan(true)}>Разбанить</button>
      <p>
        Пользователь: {name} {lastName} - {ban ? 'Разбанен' : "ЗАБАНЕН"}
      </p>
    </div>
  )
}

export {ForPractice}