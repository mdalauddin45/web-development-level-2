import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/features/counter/counterSlice"
import logger from "./middlewares/logger";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware:(getDefaultMiddleware=> getDefaultMiddleware().concat(logger))
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;