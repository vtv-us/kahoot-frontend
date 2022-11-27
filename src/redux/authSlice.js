/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      isFetching: false,
      currentUser: null,
      error: false,
      errorMsg: null,
    },
    register: {
      isFetching: false,
      error: false,
      errorMsg: null,
      success: false,
      email: null,
    },
  },
  reducers: {
    loginStart: state => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.errorMsg = null;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    loginFailed: (state, action) => {
      state.login.isFetching = false;
      state.login.error = true;
      state.login.errorMsg = action.payload;
      // state.login.errorMsg = "Email or password is incorrect";
      state.login.currentUser = null;
    },
    registerStart: state => {
      state.register.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.register.isFetching = false;
      state.register.errorMsg = null;
      state.register.error = false;
      state.register.success = true;
      state.register.email = action.payload;
    },
    registerFailed: (state, action) => {
      state.register.isFetching = false;
      state.register.error = true;
      state.register.success = false;
      // state.login.errorMsg = action.payload;
      state.register.errorMsg = action.payload;
    },
  },
});
export const { loginStart, loginSuccess, loginFailed, registerStart, registerSuccess, registerFailed } =
  authSlice.actions;
export default authSlice.reducer;
