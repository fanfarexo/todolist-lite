import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import TodoList from './pages/TodoList';
import AddTodo from './pages/AddTodo';
import EditTodo from './pages/EditTodo';
import { TodoItemType } from './AppContainer';

type PropsType = {
  todoList: TodoItemType[];
};

const AppRoute = (props: PropsType) => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<TodoList todoList={props.todoList} />} />
          <Route path='add' element={<AddTodo />} />
          <Route path='edit' element={<EditTodo />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoute;
