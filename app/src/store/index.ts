import { configureStore } from '@reduxjs/toolkit';
import Users from '../containers/user';

const store = configureStore({ reducer: { users: Users.userSlice.reducer } });

export default store;
