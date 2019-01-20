import { createSelector } from 'reselect';

import { name } from './reducer';

const getState = state => state[name];

export const getTop = createSelector(
  [getState],
  state => state.top,
);

export const getTopIds = createSelector(
  [getTop],
  top => top.ids,
);

export const getLoaded = createSelector(
  [getState],
  state => state.loaded || {},
);

export const getLoadedIds = createSelector(
  [getLoaded],
  loaded => Object.keys(loaded),
);

export const getFetching = createSelector(
  [getState],
  state => state.fetching,
);

export const getFetchingTop = createSelector(
  [getFetching],
  fetching => fetching.top,
);
