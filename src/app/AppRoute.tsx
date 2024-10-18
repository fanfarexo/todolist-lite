import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import TodoList from '../pages/TodoList';
import AddTodo from '../pages/AddTodo';
import EditTodo from '../pages/EditTodo';
import NotFound from '../pages/NotFound';

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<TodoList />} />
          <Route path='add' element={<AddTodo />} />
          <Route path='edit/:paramId' element={<EditTodo />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
