// @flow

import { Map } from 'immutable';
import Status from './Status';

export default Map({
  failedOperations: Map(),
  userExists: false,
  getCurrentUserStatus: Status.NOT_STARTED,
  signUpStatus: Status.NOT_STARTED,
  signInStatus: Status.NOT_STARTED,
  signOutStatus: Status.NOT_STARTED,
});
