import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const pcBuilderSlice = createSlice({
  name: "PC Builder",
  initialState,
  reducers: {},
});

export const PCBuilderActions = pcBuilderSlice.actions;

export const PCBuilderReducer = pcBuilderSlice.reducer;
