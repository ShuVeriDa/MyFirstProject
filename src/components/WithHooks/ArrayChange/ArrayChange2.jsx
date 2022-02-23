import {useState} from "react";

const ArrayChange2 = () => {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5])
    const [editNum, setEditNum] = useState(null)
    const [value, setValue] = useState('')

    //Вывод всех элементов из notes
    const result = notes.map((note, index) => {
        return <p key={index} onClick={() => startEdit(index)}> {note} </p>
    })

    const startEdit = (index) => {
        setEditNum(index) // берет index выбранного элемента и передает в editNum
        setValue(notes[index]) //передает в value выбранный элемент и его index
    }

    const changeHandler = (event) => {
        setValue(event.target.value) // передает значение этого элемента (поле ввода в нашем примере) в value.

        if (editNum) {  //Изменение выбранного элемента
            setNotes([...notes.slice(0, editNum), event.target.value, ...notes.slice(editNum + 1)])
        }
    }

    const blurHandler = (event) => {
        if (!editNum) { // если editNum не равен true
            setNotes([...notes, value]) // добавление нового элемента
        } else {
            setEditNum(null) // изменение текущего элемента
        }

        setValue('') // после добавления / изменения элемента очищаем Input
    }

    return (
        <div>
            <h1 style={{color: '#000'}}>ArrayChange2</h1>
            {result}
            <input value={value} onChange={changeHandler} onBlur={blurHandler}/>
        </div>
    )
};

export {ArrayChange2};
