// @flow

import uuid from 'uuid/v4';
import ActionTypes from './ActionTypes';

export function acknowledgeFailedOperation(payload) {
  return {
    type: ActionTypes.ASYNC_STORAGE_ACKNOWLEDGE_FAILED_OPERATION,
    payload,
  };
}

export function writeValue(payload) {
  return {
    type: ActionTypes.ASYNC_STORAGE_WRITE_VALUE,
    payload: payload.set('operationId', uuid()),
  };
}

export function writeValueSucceeded(payload) {
  return {
    type: ActionTypes.ASYNC_STORAGE_WRITE_VALUE_SUCCEEDED,
    payload,
  };
}

export function writeValueFailed(payload) {
  return {
    type: ActionTypes.ASYNC_STORAGE_WRITE_VALUE_FAILED,
    payload,
  };
}

export function writeValueInProgress(payload) {
  return {
    type: ActionTypes.ASYNC_STORAGE_WRITE_VALUE_IN_PROGRESS,
    payload,
  };
}

export function acknowledgeWriteValueStatus(payload) {
  return {
    type: ActionTypes.ASYNC_STORAGE_ACKNOWLEDGE_WRITE_VALUE_OPERATION,
    payload,
  };
}

export function readValue(payload) {
  return {
    type: ActionTypes.ASYNC_STORAGE_READ_VALUE,
    payload: payload.set('operationId', uuid()),
  };
}

export function readValueSucceeded(payload) {
  return {
    type: ActionTypes.ASYNC_STORAGE_READ_VALUE_SUCCEEDED,
    payload,
  };
}

export function readValueFailed(payload) {
  return {
    type: ActionTypes.ASYNC_STORAGE_READ_VALUE_FAILED,
    payload,
  };
}

export function readValueInProgress(payload) {
  return {
    type: ActionTypes.ASYNC_STORAGE_READ_VALUE_IN_PROGRESS,
    payload,
  };
}

export function acknowledgeReadValueStatus(payload) {
  return {
    type: ActionTypes.ASYNC_STORAGE_ACKNOWLEDGE_READ_VALUE_OPERATION,
    payload,
  };
}
