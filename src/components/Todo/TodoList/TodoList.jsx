import React from 'react';
import { InputField } from '../../InputField/InputField';

const TodoList = ({text}) => {
  return (
    <div>
        <InputField text={text}/>
        
    </div>
  )
}

export {TodoList};
