import {useState} from "react"
import classes from './ForPractice.module.css'

const ForPractice = () => {
    const [notes, setNotes] = useState([1, 2, 3])

    const getSum = (arr) => {
        let sum = 0

        for (let elem of arr) {
            sum += +elem
        }
        return sum
    }

    const changeHandler = (index, event) => {
        setNotes([...notes.slice(0, index), event.target.value, ...notes.slice(index + 1)])
    }

    const result = notes.map((note, index) => {
        return (
            <div>
                <input
                    key={index}
                    value={note}
                    onChange={(event) => changeHandler(index, event)}
                />
            </div>

        )
    })

    return (
        <div className={classes.forPractice}>
            {result}

            {getSum(notes)}
        </div>
    )
}

export {ForPractice}