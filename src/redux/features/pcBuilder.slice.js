import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CPU: null,
  Motherboard: null,
  RAM: null,
  PSU: null,
  Storage: null,
  Monitor: null,
};

const pcBuilderSlice = createSlice({
  name: "PC Builder",
  initialState,
  reducers: {
    addToBuilder: (state, action) => {
      state[action.payload.category] = action.payload;
    },
    removeFromBuilder: (state, action) => {
      state[action.payload] = null;
    },
  },
});

export const PCBuilderActions = pcBuilderSlice.actions;

export const PCBuilderReducer = pcBuilderSlice.reducer;
