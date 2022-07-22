import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  // 작은 스토어
  name: "counterSlice",
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
});

export default counterSlice;
export const { up } = counterSlice.actions;
