import {useState} from "react"
import classes from './ForPractice.module.css'

const ForPractice = () => {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5])
    const [editNum, setEditNum] = useState(null)

    const result = notes.map((note, index) => {
        return <p key={index} onClick={() => setEditNum(index)}>{note}</p>
    })

    const editItem = (event) => {
        setNotes([...notes.slice(0, editNum), event.target.value, ...notes.slice(editNum + 1)])
    }

    const stopEdit = () => {
        setEditNum(null)
    }

    const createItem = () => {
        if (!editNum) {
            const res = [...notes, '']
            setNotes(res)
            setEditNum(res.length - 1)
        }
    }

    return (
        <div className={classes.forPractice}>
            {result}
            <input
                value={editNum ? notes[editNum] : ''}
                onChange={editItem}
                onBlur={stopEdit}
                onFocus={createItem}
            />
        </div>
    )
}

export {ForPractice}