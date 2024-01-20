import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  user: null | object;
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
