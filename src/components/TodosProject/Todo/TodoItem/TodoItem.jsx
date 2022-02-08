import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "../../../../store/todoSlice";

import classes from './TodoItem.module.css'

const TodoItem = ({id, text, completed}) => {
  const dispatch = useDispatch()

  return (
    <li className={classes.TodoItem}>
        <input 
          type="checkbox" 
          checked={completed} 
          onChange={() => dispatch(toggleTodoComplete({id}))}
        />
        <span>{text}</span>
        <span className={classes.delete} onClick={() => dispatch(removeTodo({id}))}>&times;</span>
       
    </li>
)
}

export {TodoItem};