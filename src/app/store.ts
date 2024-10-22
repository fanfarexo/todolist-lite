import { configureStore } from '@reduxjs/toolkit';
import todosSlice from '../features/todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('todos', JSON.stringify(state.todos.todoList));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
