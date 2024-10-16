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

export type StatesType = { todoList: TodoItemType[] };
export type CallbacksType = {
  addTodo: (todo: string, desc: string) => void;
  toggleDone: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, todo: string, desc: string, done: boolean) => void;
};

const AppContainer = () => {
  const [todoList, setTodoList] = useState<TodoItemType[]>([
    { id: 1, todo: 'Meeting at 10am', desc: 'description', done: true },
    { id: 2, todo: 'Reading a book', desc: 'description', done: true },
    { id: 3, todo: 'Watch Netflix', desc: 'description', done: false },
    { id: 4, todo: 'Checkout Emails', desc: 'description', done: false },
  ]);

  const addTodo = (todo: string, desc: string) => {
    const newTodoList = produce(todoList, (draft) => {
      draft.push({ id: new Date().getTime(), todo, desc, done: false });
    });
    setTodoList(newTodoList);
  };

  const toggleDone = (id: number) => {
    const index = todoList.findIndex((todo) => todo.id === id);
    const newTodoList = produce(todoList, (draft) => {
      draft[index].done = !draft[index].done;
    });
    setTodoList(newTodoList);
  };

  const deleteTodo = (id: number) => {
    const index = todoList.findIndex((todo) => todo.id === id);
    const newTodoList = produce(todoList, (draft) => {
      draft.splice(index, 1);
    });
    setTodoList(newTodoList);
  };

  const editTodo = (id: number, todo: string, desc: string, done: boolean) => {
    const index = todoList.findIndex((todo) => todo.id === id);
    const newTodoList = produce(todoList, (draft) => {
      draft[index] = { ...draft[index], todo, desc, done };
    });
    setTodoList(newTodoList);
  };

  const states: StatesType = { todoList };
  const callbacks: CallbacksType = { addTodo, toggleDone, deleteTodo, editTodo };

  return (
    <Container>
      <AppRoute states={states} callbacks={callbacks} />
    </Container>
  );
};

export default AppContainer;
