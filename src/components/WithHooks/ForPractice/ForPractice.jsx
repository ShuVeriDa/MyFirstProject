import {useState} from "react"
import classes from './ForPractice.module.css'

const ForPractice = () => {
    const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e'])
    const [value, setValue] = useState("")

    const result = notes.map((note, index) => {
        return (
            <li key={index}>
                {note}
                <button onClick={() => remItem(index)}>RemoveNote</button>
            </li>

        )
    })

    const handleInput = (event) => {
        setValue(event.target.value)
    }

    const addItem = () => {
        setNotes([...notes, value])
        setValue('')
    }

    const remItem = (index) => {
        setNotes([...notes.slice(0, index), ...notes.slice(index + 1)])
    }

    return (
        <div className={classes.forPractice}>
            <ul>
                {result}
            </ul>

            <input value={value} onChange={handleInput}/>
            <button onClick={addItem}>Add</button>
        </div>
    )
}

export {ForPractice}