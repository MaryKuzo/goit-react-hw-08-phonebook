import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  pendingUserData: false,
  currentPath: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    setPath: (state, action) => {
      state.currentPath = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logOut.fulfilled, (state, _) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.currentPath = null;
      })
      .addCase(authOperations.fetchCurrentUser.pending, (state, _) => {
        state.pendingUserData = true;
      })
      .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.pendingUserData = false;
      })
      .addCase(authOperations.fetchCurrentUser.rejected, (state) => {
        state.pendingUserData = false;
      });
  },
});

export const { setPath } = authSlice.actions;

export const authReducer = authSlice.reducer;
