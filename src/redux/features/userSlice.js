import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  id: null,
  username: null,
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
});
