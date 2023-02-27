import { createSlice } from "@reduxjs/toolkit";

import { fetchUsers } from "../thunks/fetchUser";

import { addUser } from "../thunks/addUser";
const UserSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(addUser.pending, (state, action) => {
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const userReducer = UserSlice.reducer;
