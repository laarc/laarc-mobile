import * as constants from './constants';

export function userLogin(username, password) {
  return {
    type: constants.LOGIN_REQUEST,
    payload: {
      username,
      password,
    },
  };
}

export function userLoginSuccess(cookie, username) {
  return {
    type: constants.LOGIN_SUCCESS,
    payload: {
      cookie,
      username,
    },
  };
}

export function userLoginFailure(message, error) {
  return {
    type: constants.LOGIN_FAILURE,
    payload: {
      message,
      error,
    },
  };
}

export function getUser(username) {
  return {
    type: constants.GET_USER_REQUEST,
    payload: {
      username,
    },
  };
}

export function getUserSuccess({ created, karma, about }) {
  return {
    type: constants.GET_USER_SUCCESS,
    payload: {
      created,
      karma,
      about,
    },
  };
}

export function getUserFailure(message, error) {
  return {
    type: constants.GET_USER_FAILURE,
    payload: {
      message,
      error,
    },
  };
}
