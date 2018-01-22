// @flow

import ActionTypes from './ActionTypes';
import initialState from './InitialState';
import Status from './Status';

export default (state = initialState, action) => {
  switch (action.type) {
  case ActionTypes.ASYNC_STORAGE_ACKNOWLEDGE_FAILED_OPERATION:
    return state.deleteIn(['failedOperations', action.payload.get('operationId')]);

  case ActionTypes.ASYNC_STORAGE_WRITE_VALUE_SUCCEEDED:
    return state
      .updateIn(['writeValueOperationsStatus', action.payload.get('operationId')], Status.SUCCEEDED)
      .setIn(['keyValues', action.payload.get('key')], action.payload.get('value'));

  case ActionTypes.ASYNC_STORAGE_WRITE_VALUE_FAILED:
    return state
      .updateIn(['writeValueOperationsStatus', action.payload.get('operationId')], Status.FAILED)
      .setIn(['failedOperations', action.payload.get('operationId')], action.payload);

  case ActionTypes.ASYNC_STORAGE_WRITE_VALUE_IN_PROGRESS:
    return state.updateIn(['writeValueOperationsStatus', action.payload.get('operationId')], Status.IN_PROGRESS);

  case ActionTypes.ASYNC_STORAGE_ACKNOWLEDGE_WRITE_VALUE_OPERATION:
    return state.deleteIn(['writeValueOperationsStatus', action.payload.get('operationId')]);

  case ActionTypes.ASYNC_STORAGE_READ_VALUE_SUCCEEDED:
    return state
      .updateIn(['readValueOperationsStatus', action.payload.get('operationId')], Status.SUCCEEDED)
      .setIn(['keyValues', action.payload.get('key')], action.payload.get('value'));

  case ActionTypes.ASYNC_STORAGE_READ_VALUE_FAILED:
    return state
      .updateIn(['readValueOperationsStatus', action.payload.get('operationId')], Status.FAILED)
      .deleteIn(['keyValues', action.payload.get('key')])
      .setIn(['failedOperations', action.payload.get('operationId')], action.payload);

  case ActionTypes.ASYNC_STORAGE_READ_VALUE_IN_PROGRESS:
    return state.updateIn(['readValueOperationsStatus', action.payload.get('operationId')], Status.IN_PROGRESS);

  case ActionTypes.ASYNC_STORAGE_ACKNOWLEDGE_READ_VALUE_OPERATION:
    return state.deleteIn(['readValueOperationsStatus', action.payload.get('operationId')]);

  default:
    return state;
  }
};
