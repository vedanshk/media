import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { albumsApi , useFetchAlbumsQuery } from "./api/albumsApi";



export const store = configureStore({
  reducer: {
    users: userReducer,
    [albumsApi.reducerPath]:albumsApi.reducer
  },
  middleware:(getDefaultMiddleware) =>{
    return getDefaultMiddleware().concat(albumsApi.middleware);
  }
});

setupListeners(store.dispatch);

export * from "./thunks/fetchUser";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";

export { useFetchAlbumsQuery} 
