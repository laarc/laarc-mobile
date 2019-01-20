import { fork, take, put, call, select } from 'redux-saga/effects';

import { FetchService } from '../../services';
import { api as httpApi, parse as httpParse } from '../http';

import * as api from './api';
import * as actions from './actions';
import * as constants from './constants';
import * as selectors from './selectors';

export function* userLogin(username, password) {
  try {
    const frontPageResponse = yield call(
      httpApi.getPage,
      '/',
    );

    const linkFnId = httpParse.extractLoginLinkFnId(frontPageResponse.data);

    if (linkFnId) {
      const loginPageUrl = `/x?fnid=${linkFnId}`;

      const loginPageResponse = yield call(
        httpApi.getPage,
        loginPageUrl,
      );

      const loginFnId = httpParse.extractAuthFnId(loginPageResponse.data);

      if (loginFnId) {
        const response = yield call(
          api.userLogin,
          loginFnId,
          username,
          password,
        );

        if (response.error) {
          yield put(actions.userLoginFailure(response.error.message, response.error));
        } else {
          const cookie = httpParse.extractCookie(response.data);

          FetchService.setInstanceCookie(cookie);

          yield put(actions.userLoginSuccess(cookie, username));
        }
      }
    }
  } catch (err) {
    yield put(actions.userLoginFailure(err.message, err));
  }
}

export function* getUser() {
  try {
    const username = yield select(selectors.getUsername);

    const response = yield call(
      api.getUser,
      username,
    );

    const userData = httpParse.extractUserData(response.data);

    yield put(actions.getUserSuccess(userData));
  } catch (err) {
    yield put(actions.getUserFailure(err.message, err));
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
      constants.LOGIN_REQUEST,
      constants.GET_USER_REQUEST,
    ]);

    switch (type) {
      case constants.LOGIN_REQUEST:
        yield fork(
          userLogin,
          payload.username,
          payload.password,
        );
        break;

      case constants.GET_USER_REQUEST:
        yield fork(
          getUser,
        );
        break;

      default:
        yield null;
    }
  }
}

export default function* rootSaga() {
  yield watch();
}
