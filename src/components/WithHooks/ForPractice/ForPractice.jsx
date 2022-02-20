import {useState} from "react"
import classes from './ForPractice.module.css'

const ForPractice = () => {
    const [value, setValue] = useState('')

    const changeHandler = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className={classes.ForPractice}>
            <input
                type="radio"
                name="radio"
                value="Python"
                checked={value === "Python" ? true : false}
                onChange={changeHandler}
            />
            <span>Python</span>
            <br/>

            <input
                type="radio"
                name="radio"
                value="C++"
                checked={value === "C++" ? true : false}
                onChange={changeHandler}
            />
            <span>C++</span>
            <br/>

            <input
                type="radio"
                name="radio"
                value="JS"
                checked={value === "JS" ? true : false}
                onChange={changeHandler}
            />
            <span>JS</span>
            <p>
                {value === "JS" ? "Молодец" : null}
            </p>
        </div>
    )
}

export {ForPractice}