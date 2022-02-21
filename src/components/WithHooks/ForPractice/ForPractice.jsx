import {useState} from "react"
import classes from './ForPractice.module.css'

const ForPractice = () => {
    const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e'])
    const [editNum, setEditNum] = useState(null)

    const result = notes.map((note, index) => {
        return (
                <li key={index}>
                    {note}
                    <button onClick={() => setEditNum(index)}>Edit</button>
                </li>
        )
    })

    const changeItem = (event) => {
        setNotes([...notes.slice(0, editNum), event.target.value, ...notes.slice(editNum + 1)])
    }

    return (
        <div className={classes.forPractice}>
            <ul>
                {result}
                <input value={editNum ? notes[editNum] : ''} onChange={changeItem}/>
            </ul>
        </div>
    )
}

export {ForPractice}