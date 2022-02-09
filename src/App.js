import { Route, Routes } from 'react-router-dom';
import { Counter } from './components/WithRedux/CountsProjects/Counter';
import { Layout } from './components/Layout/Layout';
import { TodoList } from './components/WithRedux/TodosProject/Todo/TodoList/TodoList';
import { Counter2 } from './components/WithoutRedux/CountsProjects/Counter2';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/todos' element={<TodoList/>}/>
        <Route path='/count' element={<Counter />}/>
        <Route path='/count2' element={<Counter2 />}/>
      </Route>
    </Routes>
  );
}

export default App;
