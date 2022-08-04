import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  id: null,
  username: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.isLogin = true;
      state.id = action.payload.id;
      state.username = action.payload.username;
    },
    logOut: (state) => {
      state.isLogin = false;
      state.id = null;
      state.username = null;
    },
  },
});
