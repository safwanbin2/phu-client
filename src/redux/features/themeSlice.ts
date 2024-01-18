import { createSlice } from "@reduxjs/toolkit";

const initialState: { theme: string } = { theme: "light" };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      if (state.theme === "light") {
        state.theme = "dark";
      } else if (state.theme === "dark") {
        state.theme = "light";
      }
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
