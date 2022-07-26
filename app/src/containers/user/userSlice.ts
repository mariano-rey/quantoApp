import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PaginationProps } from '../../http';
import api from './api';
import { Props, UserProps } from './types';

const getAllUsers = createAsyncThunk<UserProps[], PaginationProps>(
  'users/getAll',
  async params => await api.getUsers(params),
);

const getUserById = createAsyncThunk<UserProps, number>(
  'users/getUserById',
  async userId => await api.getUserById(userId),
);

const initialState: Props = { status: 'idle', userList: [], error: null };

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllUsers.pending || getUserById.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userList = action.payload;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log(action.payload);
        // state. = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error;
      });
  },
});

export default { slice, getAllUsers, getUserById, reducer: slice.reducer };
