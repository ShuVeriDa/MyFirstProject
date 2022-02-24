import {useState} from "react"
import classes from './ForPractice.module.css'

const initDate = {
    year: 2025,
    month: 12,
    day: 31,
}

const ForPractice = () => {
   const [date, setDate] = useState(initDate)

    const handleChange = (prop, event) => {
       setDate({...date, ...{[prop]: event.target.value}})
    }


    return (
        <div className={classes.forPractice}>
            <input value={date.year} onChange={event => handleChange('year', event)}/>
            <br/>
            <input value={date.month} onChange={event => handleChange('month', event)}/>
            <br/>
            <input value={date.day} onChange={event => handleChange('day', event)}/>
            <br/>
            {date.year}.{date.month}.{date.day}
        </div>
    )
}

export {ForPractice}