import { useState } from "react"

const DinamicForms = () => {
    const [inputFields, setInputFields] = useState([
        {name: '', age: ''}
    ])

    const handleFormChange = (event, index) => { //событие onChange, которое будет запускаться, когда мы что-то вводим в поля ввода. Индекс - это индекс массива, а событие - это данные, которые мы вводим в поле ввода. Мы передаем их функции handleFormChange.
        const data = [...inputFields]
        data[index][event.target.name] = event.target.value
        setInputFields(data) //Теперь нам нужно сохранить эти данные обратно в массив InputFields, используя метод setInputFields.
    }

    const addFields = () => { //функция, которая будет срабатывать при нажатии этой кнопки.
        const newField = {name: '', age: ''}
        setInputFields([...inputFields, newField]) // возвращаем все что было в inputFields, и добавляем к нему новое name и age
    }

    const submit = (e) => { //
        e.preventDefault() //предотвратит обновление страницы.
        console.log(inputFields)
    }

    const removeFields = (index) => {
        const data = [...inputFields] //создаем новую переменную и сохраняем состояние полей ввода в этой новой переменной.
        data.splice(index, 1) //Затем нам нужно объединить эту переменную данных по индексу. 
        setInputFields(data) //Затем нам нужно сохранить его в состоянии InputFields, используя setInputFields.
    }

  return (
    <div>
        <form onSubmit={submit}>
            {inputFields.map((input, index) =>{
                return (
                    <div key={index}>
                        <input 
                            name='name'
                            placeholder="name"
                            value={input.name}
                            onChange={(event) => handleFormChange(event, index)} // Индекс - это индекс массива, а событие - это данные, которые мы вводим в поле ввода. Мы передаем их функции handleFormChange.
                        />
                        <input 
                            name='age'
                            placeholder="age"
                            value={input.age}
                            onChange={(event) => handleFormChange(event, index)} //Индекс - это индекс массива, а событие - это данные, которые мы вводим в поле ввода. Мы передаем их функции handleFormChange.
                        />
                        <button onClick={() => removeFields(index)}>Remove</button>
                    </div>
                )
            })}
            <button onClick={addFields}>Add More...</button>
            <br />
            <button onClick={submit}>Submit</button>
        </form>
    </div>
  )
}

export {DinamicForms}