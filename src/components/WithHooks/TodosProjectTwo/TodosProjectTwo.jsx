import { useState } from 'react'
import { Form } from './Form/Form'
import { Header } from './Header/Header'
import { TodosList } from './TodosList/TodosList'
import classes from './TodosProjectTwo.module.css'

const TodosProjectTwo = () => {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <div className={classes.container}>
      <div className={classes.todosWrapper}>
        <div>
          <Header />
        </div>
        <div>
          <Form 
            input={input}          
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}  
          />
        </div>
        <div>
          <TodosList 
            todos={todos}
            setTodos={setTodos}
          />
        </div>
      </div>
    </div>
  )
}

export {TodosProjectTwo}