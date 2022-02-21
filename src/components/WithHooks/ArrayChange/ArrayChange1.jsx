import {useState} from "react";

const ArrayChange1 = () => {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5])
    const [editNum, setEditNum] = useState(null)
    const [value, setValue] = useState('')

    //Вывод всех элементов из notes
    const result = notes.map((note, index) => {
        return <p key={index} onClick={() => setEditNum(index)}>{note}</p>
    })

    //Изменение выбранного элемента
    const changeItem = (event) => {
        setNotes([...notes.slice(0, editNum), event.target.value, ...notes.slice(editNum + 1)])
    }

    //Остановка изменения элемента
    const stopEdit = (event) => {
        setEditNum(null)
    }

    //изменение состояния input
    const changeValue = (event) => {
        setValue(event.target.value)
    }

    //добавление нового элемента в массив
    const addItem = (event) => {
        setNotes([...notes, value])
        setValue('')
    }

    let input;
    if (editNum) {
        input = <input
                value={notes[editNum]}
                onChange={changeItem}
                onBlur={stopEdit}
            />
    } else {
        input = <input
                value={value}
                onChange={changeValue}
                onBlur={addItem}
            />
    }

    return (
        <div>
            <h1 style={{color: '#000'}}>ArrayChange1</h1>
            {result}
            {input}
        </div>
    )
};

export {ArrayChange1};
