import { configureStore, createSlice } from "@reduxjs/toolkit";

// Slice definition
const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 1, userData: [], check: "" }, // Initialize userData as an array
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
    addForm: (state, action) => {
      state.userData.push(action.payload); // Append the new user
    },
    
    updateForm: (state, action) => {
      const { index, updatedData } = action.payload;
      state.userData[index] = updatedData; // Update the specific item
    },
    
    deleteForm: (state, action) => {
      state.userData = state.userData.filter((_, idx) => idx !== action.payload); // Remove the user by index
    },
    clearData: (state) => {
      state.userData = []; // Clear the userData array
      localStorage.removeItem("userData"); // Remove the data from localStorage
    },
  },
});

// Configure the store
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Add a subscription to persist `userData` array to localStorage
store.subscribe(() => {
  const state = store.getState(); // Get the current state
  localStorage.setItem("userData", JSON.stringify(state.counter.userData)); // Save userData array to localStorage
});

// Export actions
export const counterAction = counterSlice.actions;
