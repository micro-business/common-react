// @flow

import { Map } from 'immutable';
import uuid from 'uuid/v4';
import ActionTypes from './ActionTypes';

export function add(message, type) {
  return {
    type: ActionTypes.NOTIFICATION_ADD_NOTIFICATION,
    payload: Map({
      id: uuid(),
      message,
      type,
    }),
  };
}

export function remove(id) {
  return {
    type: ActionTypes.NOTIFICATION_REMOVE_NOTIFICATION,
    payload: Map({
      id,
    }),
  };
}
