import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface zIndexState {
  searchInputZIndex: number
}

const initialState: zIndexState = {
  searchInputZIndex: 1
};

const zIndexSlice =createSlice({
  name: "zIndex",
  initialState,
  reducers: {
    setSearchInputZIndex(state, action: PayloadAction<number>) {
      state.searchInputZIndex = action.payload
    },
  },
});

export const { setSearchInputZIndex } = zIndexSlice.actions;

// export const selectSearchInputZIndex = (state: { header: HeaderState }) =>
//   state.header.searchInputZIndex;
export default zIndexSlice.reducer