import { all } from 'redux-saga/effects';

import { sagas as stories } from '../modules/stories';
import { sagas as user } from '../modules/user';

export default function* rootSaga() {
  yield all([
    stories(),
    user(),
  ]);
}
