import { createSelector } from 'reselect';

import { name } from './reducer';

const getState = state => state[name];

export const getUserCookie = createSelector(
  [getState],
  state => state.cookie,
);

export const getUsername = createSelector(
  [getState],
  state => state.username,
);

export const getIsAuth = createSelector(
  [getState],
  state => state.isAuth,
);

export const getCreated = createSelector(
  [getState],
  state => state.created,
);

export const getKarma = createSelector(
  [getState],
  state => state.karma,
);

export const getAbout = createSelector(
  [getState],
  state => state.about,
);

export const getFetching = createSelector(
  [getState],
  state => state.fetching,
);

export const getFetchingLogin = createSelector(
  [getFetching],
  fetching => fetching.login,
);

export const getFetchingUser = createSelector(
  [getFetching],
  fetching => fetching.user,
);
