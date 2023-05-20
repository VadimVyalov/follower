import { usersApi } from './usersApi';
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  currentUsers: [],
  following: [],
};
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        usersApi.endpoints.getUsers.matchFulfilled,
        (state, { payload }) => {
          state.currentUsers = [
            ...state.currentUsers,
            ...payload.filter(newUser => {
              return !state.currentUsers.find(user => user.id === newUser.id);
            }),
          ];
          // eslint-disable-next-line
          state.currentUsers.map(user => {
            user.following = state.following.includes(user.id);
          });
        }
      )
      .addMatcher(
        usersApi.endpoints.setFollowers.matchFulfilled,
        (state, { payload }) => {
          // eslint-disable-next-line
          state.currentUsers.find(user => {
            if (user.id === payload.id) {
              user.following = !user.following;
              user.followers = payload.followers;
            }
          });

          const idx = state.following.findIndex(e => e === payload.id);
          idx < 0
            ? state.following.push(payload.id)
            : state.following.splice(idx, 1);
        }
      );
  },
});
export const usersReducer = usersSlice.reducer;
