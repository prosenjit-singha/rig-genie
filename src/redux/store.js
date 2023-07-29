import { configureStore } from "@reduxjs/toolkit";
import { PCBuilderReducer } from "./features/pcBuilder.slice";

const store = configureStore({
  reducer: {
    pcBuilder: PCBuilderReducer,
  },
});

export default store;
