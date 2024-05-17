import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
};

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData, thunkAPI) => {
    try {
      const response = await createUser(userData);

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

export const loginUserAsync = createAsyncThunk(
  "user/loginUser",
  async (userData, thunkAPI) => {
    try {
      const response = await checkUser(userData);

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
        state.access_token = action.payload.access_token;
        state.cartId = action.payload.cartId;
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
        state.access_token = action.payload.token;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      });
  },
});

export const {} = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
