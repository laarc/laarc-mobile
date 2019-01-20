import * as constants from './constants';

export function getTopStories() {
  return {
    type: constants.TOP_STORIES_REQUEST,
  };
}

export function topStoriesSuccess(ids) {
  return {
    type: constants.TOP_STORIES_SUCCESS,
    payload: {
      ids,
    },
  };
}

export function topStoriesFailure(message, error) {
  return {
    type: constants.TOP_STORIES_FAILURE,
    payload: {
      message,
      error,
    },
  };
}

export function topStoriesUpdates(ids) {
  return {
    type: constants.TOP_STORIES_UPDATES,
    payload: {
      ids,
    },
  };
}

export function loadStories(ids) {
  return {
    type: constants.LOAD_STORIES_REQUEST,
    payload: {
      ids,
    },
  };
}

export function loadStoriesSuccess(stories) {
  return {
    type: constants.LOAD_STORIES_SUCCESS,
    payload: {
      stories,
    },
  };
}

export function loadStoriesFailure(message, error) {
  return {
    type: constants.LOAD_STORIES_FAILURE,
    payload: {
      message,
      error,
    },
  };
}
