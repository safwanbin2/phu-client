import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TUser = {
  id: string;
  role: string;
  iat: number;
  exp: number;
};

type TInitialState = {
  user: null | TUser;
  token: null | string;
};

const initialState: TInitialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<TInitialState>) => {
      const { token, user } = action.payload;
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
