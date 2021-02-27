import {handleActions} from 'redux-actions';

import * as authActions from './actions';

import initialState from './initialState';

const loginReducer = handleActions(
  {
    [authActions.loginWithAuth0]: () => ({
      isLoaded: false,
    }),
    [authActions.loginWithAuth0Loaded]: () => ({
      isLoaded: true,
    }),
  },
  initialState.login,
);

export default loginReducer;
