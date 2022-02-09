import React, { useState } from 'react';
import classes from './TodoList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { InputField } from '../../InputField/InputField';
import { TodoItem } from '../TodoItem/TodoItem';
import { addTodo } from '../../../../../store/todoSlice';



const TodoList = ({removeTodo, toggleTodoComplete}) => {
  const todos = useSelector( state => state.todos.todos)

  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({text}))
    setText('')
  }
  
  return (
    <div className={classes.TodoList}>
        <InputField
          text={text}
          handleInput={setText}
          handleSubmit={addTask}
        />
        
        <ul>
          {
            todos.map(todo => (
              <TodoItem                
                key={todo.id} 
                removeTodo={removeTodo} 
                toggleTodoComplete={toggleTodoComplete} 
                {...todo} 
              />
            ))}
        </ul>
    </div>
  )
}

export {TodoList};
