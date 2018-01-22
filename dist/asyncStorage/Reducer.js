'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionTypes = require('./ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _InitialState = require('./InitialState');

var _InitialState2 = _interopRequireDefault(_InitialState);

var _Status = require('./Status');

var _Status2 = _interopRequireDefault(_Status);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _InitialState2.default;
  var action = arguments[1];

  switch (action.type) {
    case _ActionTypes2.default.ASYNC_STORAGE_ACKNOWLEDGE_FAILED_OPERATION:
      return state.deleteIn('failedOperations', action.payload.get('operationId'));

    case _ActionTypes2.default.ASYNC_STORAGE_WRITE_VALUE_SUCCEEDED:
      return state.updateIn(['writeValueOperationsStatus', action.payload.get('operationId')], _Status2.default.SUCCEEDED).setIn(['keyValues', action.payload.get('key')], action.payload.get('value'));

    case _ActionTypes2.default.ASYNC_STORAGE_WRITE_VALUE_FAILED:
      return state.updateIn(['writeValueOperationsStatus', action.payload.get('operationId')], _Status2.default.FAILED).setIn(['failedOperations', action.payload.get('operationId')], action.payload);

    case _ActionTypes2.default.ASYNC_STORAGE_WRITE_VALUE_IN_PROGRESS:
      return state.updateIn(['writeValueOperationsStatus', action.payload.get('operationId')], _Status2.default.IN_PROGRESS);

    case _ActionTypes2.default.ASYNC_STORAGE_ACKNOWLEDGE_WRITE_VALUE_OPERATION:
      return state.deleteIn(['writeValueOperationsStatus', action.payload.get('operationId')]);

    case _ActionTypes2.default.ASYNC_STORAGE_READ_VALUE_SUCCEEDED:
      return state.updateIn(['readValueOperationsStatus', action.payload.get('operationId')], _Status2.default.SUCCEEDED).setIn(['keyValues', action.payload.get('key')], action.payload.get('value'));

    case _ActionTypes2.default.ASYNC_STORAGE_READ_VALUE_FAILED:
      return state.updateIn(['readValueOperationsStatus', action.payload.get('operationId')], _Status2.default.FAILED).deleteIn(['keyValues', action.payload.get('key')]).setIn(['failedOperations', action.payload.get('operationId')], action.payload);

    case _ActionTypes2.default.ASYNC_STORAGE_READ_VALUE_IN_PROGRESS:
      return state.updateIn(['readValueOperationsStatus', action.payload.get('operationId')], _Status2.default.IN_PROGRESS);

    case _ActionTypes2.default.ASYNC_STORAGE_ACKNOWLEDGE_READ_VALUE_OPERATION:
      return state.deleteIn(['readValueOperationsStatus', action.payload.get('operationId')]);

    default:
      return state;
  }
};