import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import TodoList from './pages/TodoList';
import AddTodo from './pages/AddTodo';
import EditTodo from './pages/EditTodo';
import { AddTodoType, TodoItemType, ToggleDoneType } from './AppContainer';

type PropsType = {
  todoList: TodoItemType[];
  addTodo: AddTodoType;
  toggleDone: ToggleDoneType;
};

const AppRoute = (props: PropsType) => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            index
            element={<TodoList todoList={props.todoList} toggleDone={props.toggleDone} />}
          />
          <Route path='add' element={<AddTodo addTodo={props.addTodo} />} />
          <Route path='edit' element={<EditTodo />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoute;
