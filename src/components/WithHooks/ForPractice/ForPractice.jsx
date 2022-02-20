import {useState} from "react"
import classes from './ForPractice.module.css'

const ForPractice = () => {
    const texts = ['Соьлжа-Г1ала', 'Урус-Мартан', 'Гуьмсе', 'Шела']
    const [value, setValue] = useState("")

    const options = texts.map((text, index) => {
        return <option key={index} value={index}>{text}</option>
    })

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className={classes.ForPractice}>
            <select value={value} onChange={handleChange}>
                {options}
            </select>
            <p>
                ваш выбор: {texts[value]}
            </p>
        </div>
    )
}

export {ForPractice}