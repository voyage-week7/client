import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  id: null,
  email: null,
  username: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.username = action.payload.username;
    },
  },
});
