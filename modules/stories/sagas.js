import { fork, take, call, put, all } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import { FireService } from '../../services';

import * as actions from './actions';
import * as constants from './constants';
import * as parse from './parse';

export function makeTopStoriesObserver(emitter) {
  return (snapshot) => {
    const value = snapshot.val();
    emitter(actions.topStoriesUpdates(value));
  };
}

export function topStoriesChannel() {
  return eventChannel((emitter) => {
    const topStoriesObserver = makeTopStoriesObserver(emitter);

    FireService.addObserver('topstories', 'value', topStoriesObserver);

    // the subscriber must return an unsubscribe function
    return () => {
      FireService.removeObserver('topstories', 'value', topStoriesObserver);
    };
  });
}

export function* loadStories(ids) {
  try {
    const data = [];

    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      const path = `item/${id}`;

      const snapshot = yield call(
        FireService.readOnce,
        path,
      );

      data.push(snapshot.val());
    }

    const formatted = parse.stories(data);

    yield put(actions.loadStoriesSuccess(formatted));
  } catch (err) {
    yield put(actions.loadStoriesFailure(err.message, err));
  }
}

/**
 *  Generator function to listen for redux actions
 *
 *  Handles any action api requests as non-blocking calls and
 *    returns the appropriate action responses
 *  @returns {SagaIterator}
 */
export function* watch() {
  while (true) {
    const { type, payload = {} } = yield take([
      constants.TOP_STORIES_REQUEST,
      constants.LOAD_STORIES_REQUEST,
    ]);

    switch (type) {
      case constants.LOAD_STORIES_REQUEST:
        yield fork(
          loadStories,
          payload.ids,
        );
        break;

      default:
        yield null;
    }
  }
}

/**
 *  Generator function to listen for saga event channel emissions
 */
export function* eventWatch() {
  const channel = yield call(topStoriesChannel);

  try {
    while (true) {
      const { type, payload = {} } = yield take(channel);

      switch (type) {
        case constants.TOP_STORIES_UPDATES:
          yield put(actions.topStoriesSuccess(payload.ids));
          break;

        default:
          yield null;
          break;
      }
    }
  } catch (error) {
    // nothing
  }
}

export default function* rootSaga() {
  yield all([watch(), eventWatch()]);
}
