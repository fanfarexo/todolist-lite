import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { TodoItemType } from '../features/todosSlice';

const List = styled.ul`
  color: #8c8c8c;
  font-size: x-large;
  font-weight: bold;
  padding-top: 50px;
`;

const TodoList = () => {
  const todoList = useSelector((state: RootState) => state.todos.todoList);

  const todoItem = todoList.map((todo: TodoItemType) => {
    return <TodoItem key={todo.id} todoItem={todo} />;
  });

  return <List>{todoItem}</List>;
};

export default TodoList;
