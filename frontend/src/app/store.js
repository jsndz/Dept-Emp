import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../features/auth/authSlice";
import DepartmentReducer from "../features/department/depSlice";
import EmployeeReducer from "../features/employee/empSlice";
const store = configureStore({
  reducer: {
    user: UserReducer,
    department: DepartmentReducer,
    employee: EmployeeReducer,
  },
});
export default store;
