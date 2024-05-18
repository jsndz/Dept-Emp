import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../features/auth/authSlice";
const store = configureStore({
  reducer: { user: UserReducer },
});
export default store;
