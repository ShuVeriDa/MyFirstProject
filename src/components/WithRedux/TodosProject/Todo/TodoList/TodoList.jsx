import classes from './TodoList.module.css'
import { useSelector } from 'react-redux';
import { TodoItem } from '../TodoItem/TodoItem';

const TodoList = () => {
  const todos = useSelector( state => state.todos.todos)

  return (
    <div className={classes.TodoList}> 
        <ul>
          {
            todos.map(todo => (
              <TodoItem                
                key={todo.id} 
                {...todo} 
              />
            ))}
        </ul>
    </div>
  )
}

export {TodoList};
