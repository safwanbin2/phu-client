import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTokenUser = {
  id: string;
  role: string;
};

type TInitialState = {
  user: null | TTokenUser;
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
  },
});

export const { saveUser } = authSlice.actions;
export default authSlice.reducer;
