import { configureStore, createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 1, name: "Deepak" },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload);
    },
    subtract: (state, action) => {
      state.counterVal -= Number(action.payload);
    },
    addName: (state, action) => {
      let newName = action.payload.event;
      state.name = newName;
    },
  },
});

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
export const counterAction = counterSlice.actions;
