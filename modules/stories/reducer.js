import * as constants from './constants';

export const name = 'stories';

const initialState = {
  top: {
    ids: [],
  },
  loaded: {},
  fetching: {
    top: false,
    loaded: false,
  },
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case constants.TOP_STORIES_REQUEST:
      return {
        ...state,
        fetching: {
          ...state.fetching,
          top: true,
        },
      };

    case constants.TOP_STORIES_SUCCESS:
      return {
        ...state,
        top: {
          ...state.top,
          ids: action.payload.ids,
        },
        fetching: {
          ...state.fetching,
          top: false,
        },
      };

    case constants.TOP_STORIES_FAILURE:
      return {
        ...state,
        fetching: {
          ...state.fetching,
          top: false,
        },
      };

    case constants.LOAD_STORIES_REQUEST:
      return {
        ...state,
        fetching: {
          ...state.fetching,
          loaded: true,
        },
      };

    case constants.LOAD_STORIES_SUCCESS:
      return {
        ...state,
        loaded: {
          ...state.loaded,
          ...action.payload.stories,
        },
        fetching: {
          ...state.fetching,
          loaded: false,
        },
      };

    case constants.LOAD_STORIES_FAILURE:
      return {
        ...state,
        fetching: {
          ...state.fetching,
          loaded: false,
        },
      };

    default:
      return state;
  }
};
