import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import classes from'./App.module.css';
import { Layout } from './components/Layout/Layout';
import { TodoList } from './components/Todo/TodoList/TodoList';

function App() {
  const [text, setText] = useState()

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/todos' element={<TodoList text={text}/>}/>
      </Route>
    </Routes>
  );
}

export default App;
