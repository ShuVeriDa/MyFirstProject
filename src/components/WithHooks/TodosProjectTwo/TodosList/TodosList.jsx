import classes from './TodosList.module.css'

const TodosList = ({todos, setTodos}) => {
  return (
    <div>
        {todos.map((todo) => (
            <li className={classes.list_item} key={todo.id}>
                <input 
                    type="text" 
                    value={todo.title} 
                    className={classes.list} 
                    onChange={(event) => event.preventDefault()}
                />
                <div>
                    <button className={`${classes.button_complete} ${classes.task_button}`}>
                        <i className='fa fa-check-circle'></i>
                    </button>
                    <button className={`${classes.button_edit} ${classes.task_button}`}>
                        <i className='fa fa-edit'></i>
                    </button>
                    <button className={`${classes.button_delete} ${classes.task_button}`}>
                        <i className='fa fa-trash'></i>
                    </button>
                </div>
            </li>
        ))}
    </div>
  )
}

export {TodosList}