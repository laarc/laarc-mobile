import * as constants from './constants';

export function getPage(url) {
  return {
    type: constants.GET_PAGE_REQUEST,
    payload: {
      url,
    },
  };
}

export function getPageSuccess(html) {
  return {
    type: constants.GET_PAGE_SUCCESS,
    payload: {
      html,
    },
  };
}

export function getPageFailure(message, error) {
  return {
    type: constants.GET_PAGE_FAILURE,
    payload: {
      message,
      error,
    },
  };
}
