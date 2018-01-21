// @flow

import ActionTypes from './ActionTypes';
import initialState from './InitialState';

export default function (state = initialState, action) {
  switch (action.type) {
  case ActionTypes.NOTIFICATION_ADD_NOTIFICATION:
    return state.update('messages', messages => messages.push(action.payload));

  case ActionTypes.NOTIFICATION_REMOVE_NOTIFICATION:
    return state.update('messages', messages => messages.filterNot(_ => _.get('messageId') === action.payload.get('messageId')));

  default:
    return state;
  }
}
