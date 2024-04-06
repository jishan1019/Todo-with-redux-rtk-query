import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "toodo",
  initialState,
  reducers: {},
});

export const {} = todoSlice.actions;

export default todoSlice.reducer;
