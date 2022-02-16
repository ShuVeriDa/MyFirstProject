import classes from './Form.module.css'
import {v4 as uuidv4} from 'uuid'

const Form = ({input, setInput, todos, setTodos}) => {
    const onInputChange = (event) => {
        setInput(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault()
        setTodos(
            [...todos, 
                {
                    id: uuidv4(), 
                    title: input, 
                    completed: false
                }
            ]
        )
        setInput("")
    }
    

  return (
    <form onSubmit={onFormSubmit}>
        <input 
            type="text" 
            placeholder='Enter a Todo...' 
            className={classes.task_input} 
            value={input} 
            required
            onChange={onInputChange}
        />
        <button className={classes.button_add} type="submit">Add</button>
    </form>
  )
}

export {Form}