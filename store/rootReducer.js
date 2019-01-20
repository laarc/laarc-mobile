import { combineReducers } from 'redux';

import { reducer as storiesReducer } from '../modules/stories';
import { reducer as userReducer } from '../modules/user';

const appReducer = combineReducers({
  [storiesReducer.name]: storiesReducer.reducer,
  [userReducer.name]: userReducer.reducer,
});

export default appReducer;
