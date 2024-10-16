import styled from 'styled-components';
import TodoItem from './TodoItem';
import { TodoItemType, ToggleDoneType } from '../AppContainer';

const List = styled.ul`
  color: #8c8c8c;
  font-size: x-large;
  font-weight: bold;
  padding-top: 50px;
`;

type PropsType = {
  todoList: TodoItemType[];
  toggleDone: ToggleDoneType;
};

const TodoList = (props: PropsType) => {
  const todoItem = props.todoList.map((item) => {
    return <TodoItem key={item.id} todoItem={item} toggleDone={props.toggleDone} />;
  });

  return <List>{todoItem}</List>;
};

export default TodoList;
