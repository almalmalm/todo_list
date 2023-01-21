import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todosList: [],
  },
  reducers: {
    addAction(state, action) {
      const text = action.payload.text;
      if (text.trim() !== '') {
        state.todosList.push({
          id: new Date().toISOString(),
          text: text,
          completed: false,
        });
      }
    },
    toggleAction(state, action) {
      const todo = state.todosList.find(
        (todo) => todo.id === action.payload.id
      );
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteAction(state, action) {
      state.todosList = state.todosList.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
  },
});

export const { addAction, toggleAction, deleteAction } = todoSlice.actions;

export default todoSlice.reducer;
