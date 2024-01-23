import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const authDemoSlice = createSlice({
  name: "authDemo",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { saveUser, logout } = authDemoSlice.actions;
export default authDemoSlice.reducer;
