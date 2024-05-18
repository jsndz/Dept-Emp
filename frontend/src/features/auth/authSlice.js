import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser, checkUser } from "./authAPI";
const initialState = {
  userInfo: null,
  error: null,
};

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData, thunkAPI) => {
    try {
      const response = await createUser(userData);
      console.log("response", response);
      return response.data;
    } catch (error) {
      console.error("Error during signup:", error);
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data.err);
      } else {
        return thunkAPI.rejectWithValue("Unknown error occurred");
      }
    }
  }
);

export const loginUserAsync = createAsyncThunk(
  "user/loginUser",
  async (userData, thunkAPI) => {
    try {
      const response = await checkUser(userData);
      console.log("response", response);
      return response;
    } catch (error) {
      console.error("Error during login:", error);
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data.err);
      } else {
        return thunkAPI.rejectWithValue("Unknown error occurred");
      }
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userInfo = action.payload;
      })
      .addCase(createUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      })
      .addCase(loginUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userInfo = action.payload;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      });
  },
});

export const {} = userSlice.actions;

export const selectUser = (state) => state.user.userInfo;
export const selectError = (state) => state.user.error;

export default userSlice.reducer;
