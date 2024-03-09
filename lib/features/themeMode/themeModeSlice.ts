import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../store";

export type ThemeMode = "light" | "dark";

export interface ThemeModeState {
  mode: ThemeMode;
}

const initialState: ThemeModeState = {
  mode: "light",
};

export const themeModeSlice = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
    },
  },
});

// export const selectCurrentThemeMode = (state: RootState): ThemeMode => state.themeMode.mode;

export const { setMode } = themeModeSlice.actions;
export default themeModeSlice.reducer;