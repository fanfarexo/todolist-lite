import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import TodoList from './pages/TodoList';
import AddTodo from './pages/AddTodo';
import EditTodo from './pages/EditTodo';
import { CallbacksType, StatesType } from './AppContainer';
import NotFound from './pages/NotFound';

type PropsType = {
  states: StatesType;
  callbacks: CallbacksType;
};

const AppRoute = ({ states, callbacks }: PropsType) => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<TodoList states={states} callbacks={callbacks} />} />
          <Route path='add' element={<AddTodo callbacks={callbacks} />} />
          <Route
            path='edit/:paramId'
            element={<EditTodo states={states} callbacks={callbacks} />}
          />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
