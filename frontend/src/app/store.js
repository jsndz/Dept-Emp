import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../features/auth/authSlice";
import DepartmentUser from "../features/department/depSlice";
const store = configureStore({
  reducer: { user: UserReducer, department: DepartmentUser },
});
export default store;
