import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TAuthUser = {
  user: null | object;
  token: null | string;
};

const initialState: TAuthUser = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<TAuthUser>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { saveUser, logout } = authSlice.actions;
export default authSlice.reducer;
