import { Route, Routes } from 'react-router-dom';
import { Counter } from './components/CountsProjects/Counter';
import { Layout } from './components/Layout/Layout';
import { TodoList } from './components/TodosProject/Todo/TodoList/TodoList';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/todos' element={<TodoList />}/>
        <Route path='/count' element={<Counter />}/>
      </Route>
    </Routes>
  );
}

export default App;
