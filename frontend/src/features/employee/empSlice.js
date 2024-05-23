import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  updateEmployee,
} from "./empAPI";

const initialState = {
  employeeInfo: [],
  status: "idle",
};

export const createEmployeeAsync = createAsyncThunk(
  "employee/createEmployee",
  async (employeeName, thunkAPI) => {
    try {
      const response = await createEmployee(employeeName);

      return response.data;
    } catch (error) {
      console.error("Error during creating employee:", error);
    }
  }
);

export const getEmployeesAsync = createAsyncThunk(
  "employee/getEmployees",
  async (_, thunkAPI) => {
    try {
      const response = await getEmployee();
      return response.data;
    } catch (error) {
      console.error("Error during getting employee:", error);
    }
  }
);
export const deleteEmployeesAsync = createAsyncThunk(
  "employee/deleteEmployees",
  async (id, thunkAPI) => {
    try {
      const response = await deleteEmployee(id);
      return response.data;
    } catch (error) {
      console.error("Error during delete employee:", error);
    }
  }
);
export const updateEmployeesAsync = createAsyncThunk(
  "employee/updateEmployees",
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await updateEmployee(id, data);
      return response.data;
    } catch (error) {
      console.error("Error during update employee:", error);
    }
  }
);

export const employeeSlice = createSlice({
  name: "employee",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(createEmployeeAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createEmployeeAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(createEmployeeAsync.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(getEmployeesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getEmployeesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.employeeInfo = action.payload;
      })
      .addCase(getEmployeesAsync.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(deleteEmployeesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteEmployeesAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(deleteEmployeesAsync.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(updateEmployeesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateEmployeesAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(updateEmployeesAsync.rejected, (state, action) => {
        state.status = "idle";
      });
  },
});

export const {} = employeeSlice.actions;

export const selectEmployees = (state) => state.employee.employeeInfo;

export default employeeSlice.reducer;
