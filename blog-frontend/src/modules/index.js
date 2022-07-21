import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import post, { postSaga } from './post';
import loading from './loading';

const rootReducer = combineReducers({
  auth,
  loading,
  post,
});

export function* rootSaga() {
  yield afterAll([authSaga(), postSaga()]);
}

export default rootReducer;
