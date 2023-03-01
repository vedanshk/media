import { createSlice } from "@reduxjs/toolkit";

import { fetchUsers } from "../thunks/fetchUser";
import { removeUser } from "../thunks/removeUser";
import { addUser } from "../thunks/addUser";
import { act } from "react-dom/test-utils";
const UserSlice = createSlice({
  name: "user",
  initialState: {
    data: [],

  },
  extraReducers(builder) {

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.data = action.payload;
    
    });
  
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.data.push(action.payload);

    });

    builder.addCase(removeUser.fulfilled , (state , action)=>{
      const {id}  = action.payload;
      const userIndexToBeRemoved =  state.data.findIndex(user => user.id === id);

      state.data.splice(userIndexToBeRemoved , 1);
      
    })
 
  },
});

export const userReducer = UserSlice.reducer;
