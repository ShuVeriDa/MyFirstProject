import { useState } from "react"
import { InputField2 } from "./InputField/InputField2"
import { TodoList2 } from "./Todo/TodoList/TodoList2"

const TodosIndex2 = () => {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')

    const addTodo = () => {
        if (text.trim().length) {
          setTodos([
            ...todos,
            {
              id: new Date().toISOString(),
              text: text,
              completed: false,
            }
          ])
          setText('')
        }
      }
    
    const toggleTodoComplete = (todoId) => {
        setTodos(
          todos.map(
            todo => {
              if (todo.id !== todoId) {
                return todo
              }
    
              return {
                ...todo,
                completed: !todo.completed,
              }
            }
          )
        )
    }
    
      const removeTodo = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId))
      }
  return (
    <div>
        <InputField2
          text={text}
          handleInput={setText}
          handleSubmit={addTodo}
        />

        <TodoList2 removeTodo={removeTodo} todos={todos} toggleTodoComplete={toggleTodoComplete}/>
    </div>
  )
}

export {TodosIndex2}