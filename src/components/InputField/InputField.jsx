import React from 'react';

const InputField = ({text}) => {
  return (
      <label>
          <input value={text}/>
          <button >Add Todo</button>
      </label>
  )
}

export {InputField};
