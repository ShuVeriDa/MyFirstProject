import classes from './TodosList.module.css'

const TodosList = ({todos, setTodos, setEditTodo}) => {
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {...item, completed: !item.completed}
                }
                return item
            })
        )
    }

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id)
        setEditTodo(findTodo)
    }

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }


  return (
    <div>
        {todos.map((todo) => (
            <li className={classes.list_item} key={todo.id}>
                <input 
                    type="text" 
                    value={todo.title} 
                    className={`${classes.list} ${todo.completed ? classes.complete : ''}`} 
                    onChange={(event) => event.preventDefault()}
                />
                <div>
                    <button 
                        className={`${classes.button_complete} ${classes.task_button}`}
                        onClick={() => handleComplete(todo)}
                    >
                        <i className='fa fa-check-circle'></i>
                    </button>
                    <button 
                        className={`${classes.button_edit} ${classes.task_button}`}
                        onClick={() => handleEdit(todo)}
                    >
                        <i className='fa fa-edit'></i>
                    </button>
                    <button 
                        className={`${classes.button_delete} ${classes.task_button}`} 
                        onClick={() => handleDelete(todo)}
                    >
                        <i className='fa fa-trash'></i>
                    </button>
                </div>
            </li>
        ))}
    </div>
  )
}

export {TodosList}