import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter;

export const selectCurrentUsers = state => state.users.currentUsers;

export const selectfiltredUser = createSelector(
  [selectFilter, selectCurrentUsers],
  (filter, users) => {
    switch (filter) {
      case '-1':
        return users;
      case '0':
        return users.filter(user => user.following === false);
      case '1':
        return users.filter(user => user.following === true);

      default:
        break;
    }
  }
);
