import { useEffect, useState } from 'react'
import { Form } from './Form/Form'
import { Header } from './Header/Header'
import { TodosList } from './TodosList/TodosList'
import classes from './TodosProjectTwo.module.css'

const TodosProjectTwo = () => {
  const initialState = JSON.parse(localStorage.getItem('todos')) || []
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState(initialState)
  const [editTodo, setEditTodo] = useState(null)

 

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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
            setEditTodo={setEditTodo}
            editTodo={editTodo}
          />
        </div>
        <div>
          <TodosList 
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  )
}

export {TodosProjectTwo}