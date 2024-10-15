import styled from 'styled-components';
import AppRoute from './AppRoute';
import { useState } from 'react';
import { produce } from 'immer';

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

export type TodoItemType = {
  id: number;
  todo: string;
  desc: string;
  done: boolean;
};

export type AddTodoType = (todo: string, desc: string) => void;

const AppContainer = () => {
  const [todoList, setTodoList] = useState<TodoItemType[]>([
    { id: 1, todo: 'Meeting at 10am', desc: 'description', done: true },
    { id: 2, todo: 'Reading a book', desc: 'description', done: true },
    { id: 3, todo: 'Watch Netflix', desc: 'description', done: false },
    { id: 4, todo: 'Checkout Emails', desc: 'description', done: false },
  ]);

  const addTodo: AddTodoType = (todo, desc) => {
    const newTodoList = produce(todoList, (draft) => {
      draft.push({ id: new Date().getTime(), todo, desc, done: false });
    });
    setTodoList(newTodoList);
  };

  return (
    <Container>
      <AppRoute todoList={todoList} addTodo={addTodo} />
    </Container>
  );
};

export default AppContainer;
