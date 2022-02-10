import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../../../store/todoSlice"
import { InputField } from "./InputField/InputField"
import { TodoList } from "./Todo/TodoList/TodoList"

const TodosIndex = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addTodo({text}))
        setText('')
    }
  return (
    <div>
        <InputField
          text={text}
          handleInput={setText}
          handleSubmit={addTask}
        />

        <TodoList />
    </div>
  )
}

export {TodosIndex}