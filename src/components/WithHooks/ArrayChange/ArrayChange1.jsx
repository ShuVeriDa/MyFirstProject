import {useState} from "react";

const ArrayChange1 = () => {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5])
    const [editNum, setEditNum] = useState(null)
    const [value, setValue] = useState('')

    const result = notes.map((note, index) => {
        return <p key={index} onClick={() => setEditNum(index)}>{note}</p>
    })

    const changeItem = (event) => {
        setNotes([...notes.slice(0, editNum), event.target.value, ...notes.slice(editNum + 1)])
    }

    const stopEdit = (event) => {
        setEditNum(null)
    }

    const changeValue = (event) => {
        setValue(event.target.value)
    }

    const addItem = (event) => {
        setNotes([...notes, value])
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
            {result}
            {input}
        </div>
    )
};

export {ArrayChange1};
