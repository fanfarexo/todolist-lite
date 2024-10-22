import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type TodoItemType = {
  id: number;
  title: string;
  desc: string;
  done: boolean;
};

export type TodoListType = {
  todoList: TodoItemType[];
};

const loadInitialState = (): TodoListType => {
  const savedTodos = localStorage.getItem('todos');
  if (savedTodos) {
    return { todoList: JSON.parse(savedTodos) as TodoItemType[] };
  }
  return {
    todoList: [
      { id: 1, title: 'Meeting at 10am', desc: 'description', done: true },
      { id: 2, title: 'Reading a book', desc: 'description', done: true },
      { id: 3, title: 'Watch Netflix', desc: 'description', done: false },
      { id: 4, title: 'Checkout Emails', desc: 'description', done: false },
    ],
  };
};

const initialState: TodoListType = loadInitialState();

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ title: string; desc: string }>) => {
      const newTodo = {
        id: new Date().getTime(),
        title: action.payload.title,
        desc: action.payload.desc,
        done: false,
      };
      state.todoList.push(newTodo);
    },
    deleteTodo: (state, action: PayloadAction<{ id: number }>) => {
      state.todoList = state.todoList.filter((item) => item.id !== action.payload.id);
    },
    toggleDone: (state, action: PayloadAction<{ id: number }>) => {
      const todo = state.todoList.find((item) => item.id === action.payload.id);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    editTodo: (
      state,
      action: PayloadAction<{ id: number; title: string; desc: string; done: boolean }>,
    ) => {
      const todo = state.todoList.find((item) => item.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
        todo.desc = action.payload.desc;
        todo.done = action.payload.done;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleDone, editTodo } = todosSlice.actions;

export default todosSlice.reducer;
