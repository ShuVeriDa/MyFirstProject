import { Route, Routes } from 'react-router-dom';
import { Counter } from './components/WithRedux/CountsProjects/Counter';
import { Layout } from './components/Layout/Layout';
import { Counter2 } from './components/WithHooks/CountsProjects/Counter2';
import { ForPractice } from './components/WithHooks/ForPractice/ForPractice';
import { TodosIndex2 } from './components/WithHooks/TodosProject/TodosIndex2';
import { TodosIndex } from './components/WithRedux/TodosProject/TodosIndex';
import { DinamicForms } from './components/WithHooks/dinamicForms/DinamicForms';
import { Auth } from './components/WithRedux/Auth/Auth';
import { DinamicForms2 } from './components/WithRedux/dinamicForms2/DinamicForms2';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/todos' element={<TodosIndex/>}/>
        <Route path='/count' element={<Counter />}/>
        <Route path='/count2' element={<Counter2 />}/>
        <Route path='/todos2' element={<TodosIndex2/>}/>
        <Route path='/forPractice' element={<ForPractice />}/>
        <Route path='/dinamicForms' element={<DinamicForms />} />
        <Route path='/dinamicForms2' element={<DinamicForms2 />} />
        <Route path='/signup' element={<Auth />}/>
      </Route>
    </Routes>
  );
}

export default App;
