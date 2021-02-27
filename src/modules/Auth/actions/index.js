import {createActions} from 'redux-actions';

import {LOGIN_WITH_AUTH0} from './types';

export const {loginWithAuth0, loginWithAuth0Loaded} = createActions({
  [LOGIN_WITH_AUTH0]: (username, password) => ({password, username}),
});
