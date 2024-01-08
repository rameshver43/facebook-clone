import { createSlice } from "@reduxjs/toolkit";

export const userReducer = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    login: (state, action) => {
      return action.payload;
    },
  },
});

export const { login } = userReducer.actions;
export default userReducer.reducer;
