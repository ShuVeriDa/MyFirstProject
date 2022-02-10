import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "../../../../../store/todoSlice";

import classes from './TodoItem2.module.css'

const TodoItem2 = ({id, text, completed}) => {
  const dispatch = useDispatch()

  return (
    <li className={classes.TodoItem}>
        <input 
          type="checkbox" 
          checked={completed} 
          onChange={() => toggleTodoComplete(id)}
        />
        <span>{text}</span>
        <span className={classes.delete} onClick={() =>removeTodo(id)}>&times;</span>
       
    </li>
)
}

export {TodoItem2};