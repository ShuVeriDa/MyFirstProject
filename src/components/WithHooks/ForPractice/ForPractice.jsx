import {useState} from "react"
import classes from './ForPractice.module.css'

const ForPractice = () => {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5])
    const [value, setValue] = useState("")

    const result = notes.map((note, index) => {
        return (
            <p key={index}>{note}</p>
        )
    })

    const handleInput = (event) => {
        setValue(event.target.value)
    }

    const addItem = () => {
        setNotes([...notes, value])
        setValue('')
    }

    return (
        <div className={classes.ForPractice}>
            {result}

            <input value={value} onChange={handleInput}/>
            <button onClick={addItem}>Add</button>
        </div>
    )
}

export {ForPractice}