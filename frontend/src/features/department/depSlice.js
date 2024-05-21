import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createDepartment,
  deleteDepartments,
  getDepartments,
  updateDepartments,
} from "./depAPI";

const initialState = {
  departmentInfo: [],
};

export const createDepartmentAsync = createAsyncThunk(
  "department/createDepartment",
  async (departmentName, thunkAPI) => {
    try {
      const response = await createDepartment(departmentName);
      console.log("response", response);
      return response.data;
    } catch (error) {
      console.error("Error during creating department:", error);
    }
  }
);

export const getDepartmentsAsync = createAsyncThunk(
  "department/getDepartments",
  async (_, thunkAPI) => {
    try {
      const response = await getDepartments();
      console.log("response", response);
      return response.data;
    } catch (error) {
      console.error("Error during getting department:", error);
    }
  }
);
export const deleteDepartmentsAsync = createAsyncThunk(
  "department/deleteDepartments",
  async (id, thunkAPI) => {
    try {
      console.log("jjd");
      const response = await deleteDepartments(id);
      console.log("response", response);
      return response.data;
    } catch (error) {
      console.error("Error during delete department:", error);
    }
  }
);
export const updateDepartmentsAsync = createAsyncThunk(
  "department/updateDepartments",
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await updateDepartments(id, data);
      console.log("response", response);
      return response.data;
    } catch (error) {
      console.error("Error during update department:", error);
    }
  }
);

export const departmentSlice = createSlice({
  name: "department",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(createDepartmentAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createDepartmentAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(createDepartmentAsync.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(getDepartmentsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDepartmentsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.departmentInfo = action.payload;
      })
      .addCase(getDepartmentsAsync.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(deleteDepartmentsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteDepartmentsAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(deleteDepartmentsAsync.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(updateDepartmentsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateDepartmentsAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(updateDepartmentsAsync.rejected, (state, action) => {
        state.status = "idle";
      });
  },
});

export const {} = departmentSlice.actions;

export const selectDepartments = (state) => state.department.departmentInfo;

export default departmentSlice.reducer;
