'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.acknowledgeFailedOperation = acknowledgeFailedOperation;
exports.writeValue = writeValue;
exports.writeValueSucceeded = writeValueSucceeded;
exports.writeValueFailed = writeValueFailed;
exports.writeValueInProgress = writeValueInProgress;
exports.acknowledgeWriteValueStatus = acknowledgeWriteValueStatus;
exports.readValue = readValue;
exports.readValueSucceeded = readValueSucceeded;
exports.readValueFailed = readValueFailed;
exports.readValueInProgress = readValueInProgress;
exports.acknowledgeReadValueStatus = acknowledgeReadValueStatus;

var _cuid = require('cuid');

var _cuid2 = _interopRequireDefault(_cuid);

var _ActionTypes = require('./ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function acknowledgeFailedOperation(payload) {
  return {
    type: _ActionTypes2.default.ASYNC_STORAGE_ACKNOWLEDGE_FAILED_OPERATION,
    payload: payload
  };
}

function writeValue(payload) {
  return {
    type: _ActionTypes2.default.ASYNC_STORAGE_WRITE_VALUE,
    payload: payload.set('operationId', (0, _cuid2.default)())
  };
}

function writeValueSucceeded(payload) {
  return {
    type: _ActionTypes2.default.ASYNC_STORAGE_WRITE_VALUE_SUCCEEDED,
    payload: payload
  };
}

function writeValueFailed(payload) {
  return {
    type: _ActionTypes2.default.ASYNC_STORAGE_WRITE_VALUE_FAILED,
    payload: payload
  };
}

function writeValueInProgress(payload) {
  return {
    type: _ActionTypes2.default.ASYNC_STORAGE_WRITE_VALUE_IN_PROGRESS,
    payload: payload
  };
}

function acknowledgeWriteValueStatus(payload) {
  return {
    type: _ActionTypes2.default.ASYNC_STORAGE_ACKNOWLEDGE_WRITE_VALUE_OPERATION,
    payload: payload
  };
}

function readValue(payload) {
  return {
    type: _ActionTypes2.default.ASYNC_STORAGE_READ_VALUE,
    payload: payload.set('operationId', (0, _cuid2.default)())
  };
}

function readValueSucceeded(payload) {
  return {
    type: _ActionTypes2.default.ASYNC_STORAGE_READ_VALUE_SUCCEEDED,
    payload: payload
  };
}

function readValueFailed(payload) {
  return {
    type: _ActionTypes2.default.ASYNC_STORAGE_READ_VALUE_FAILED,
    payload: payload
  };
}

function readValueInProgress(payload) {
  return {
    type: _ActionTypes2.default.ASYNC_STORAGE_READ_VALUE_IN_PROGRESS,
    payload: payload
  };
}

function acknowledgeReadValueStatus(payload) {
  return {
    type: _ActionTypes2.default.ASYNC_STORAGE_ACKNOWLEDGE_READ_VALUE_OPERATION,
    payload: payload
  };
}