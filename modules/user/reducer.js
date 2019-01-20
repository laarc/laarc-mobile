import * as constants from './constants';

export const name = 'user';

const initialState = {
  username: null,
  cookie: null,
  isAuth: false,
  email: null,
  karma: null,
  about: null,
  created: null,
  fetching: {
    login: false,
    user: false,
  },
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case constants.LOGIN_REQUEST:
      return {
        ...state,
        fetching: {
          ...state.fetching,
          login: true,
        },
      };

    case constants.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        cookie: action.payload.cookie,
        username: action.payload.username,
        fetching: {
          ...state.fetching,
          login: false,
        },
      };

    case constants.LOGIN_FAILURE:
      return {
        ...state,
        fetching: {
          ...state.fetching,
          login: false,
        },
      };

    case constants.GET_USER_REQUEST:
      return {
        ...state,
        fetching: {
          ...state.fetching,
          user: true,
        },
      };

    case constants.GET_USER_SUCCESS:
      return {
        ...state,
        karma: action.payload.karma,
        about: action.payload.about,
        created: action.payload.created,
        fetching: {
          ...state.fetching,
          user: false,
        },
      };

    case constants.GET_USER_FAILURE:
      return {
        ...state,
        fetching: {
          ...state.fetching,
          user: false,
        },
      };

    default:
      return state;
  }
};
