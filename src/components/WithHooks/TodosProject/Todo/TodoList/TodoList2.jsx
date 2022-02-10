import classes from './TodoList2.module.css'
import { TodoItem2 } from '../TodoItem/TodoItem2';

const TodoList2 = ({removeTodo, toggleTodoComplete, todos}) => {
 
  return (
    <div className={classes.TodoList}>   
        <ul>
          {
            todos.map(todo => (
              <TodoItem2                
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

export {TodoList2};
