import {useState} from "react";

const ArrayChange3 = () => {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5])
    const [editNum, setEditNum] = useState(null)

    //Вывод всех элементов из notes
    const result = notes.map((note, index) => {
        return <p key={index} onClick={() => startEdit(index)}>{note}</p>
    })

    // берет index выбранного элемента и передает в editNum
    const startEdit = (index) => {
        setEditNum(index)
    }

    //Изменение выбранного элемента
    const editItem = (event) => {
        setNotes([...notes.slice(0, editNum), event.target.value, ...notes.slice(editNum + 1)])
    }

    const createItem = () => {
        if (!editNum) { // если editNum не равен true
            const res = [...notes, '']
            setNotes(res)
            setEditNum(res.length - 1)
        }
    }

    const stopEdit = () => { //Остановка изменения
        setEditNum(null) // изменение текущего элемента
    }


    return (
        <div>
            <h1 style={{color: '#000'}}>ArrayChange3</h1>
            {result}
            <input
                value={editNum ? notes[editNum] : ''}
                onChange={editItem}
                onFocus={createItem}
                onBlur={stopEdit}
            />
        </div>
    )
};

export {ArrayChange3};