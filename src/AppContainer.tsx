import styled from 'styled-components';
import AppRoute from './AppRoute';
import { useState } from 'react';

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

const AppContainer = () => {
  const [todoList] = useState<TodoItemType[]>([
    { id: 1, todo: 'Meeting at 10am', desc: 'description', done: true },
    { id: 2, todo: 'Reading a book', desc: 'description', done: true },
    { id: 3, todo: 'Watch Netflix', desc: 'description', done: false },
    { id: 4, todo: 'Checkout Emails', desc: 'description', done: false },
  ]);

  return (
    <Container>
      <AppRoute todoList={todoList} />
    </Container>
  );
};

export default AppContainer;
