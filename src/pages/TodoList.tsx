import styled from 'styled-components';
import TodoItem from './TodoItem';
import { CallbacksType, StatesType } from '../AppContainer';

const List = styled.ul`
  color: #8c8c8c;
  font-size: x-large;
  font-weight: bold;
  padding-top: 50px;
`;

type PropsType = {
  states: StatesType;
  callbacks: CallbacksType;
};

const TodoList = ({ states, callbacks }: PropsType) => {
  const todoItem = states.todoList.map((item) => {
    return <TodoItem key={item.id} todoItem={item} callbacks={callbacks} />;
  });

  return <List>{todoItem}</List>;
};

export default TodoList;
