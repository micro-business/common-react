'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.remove = remove;

var _immutable = require('immutable');

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _ActionTypes = require('./ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function add(message, messageType) {
  return {
    type: _ActionTypes2.default.MESSAGE_BAR_ADD_MESSAGE,
    payload: (0, _immutable.Map)({
      message: message,
      messageType: messageType,
      messageId: (0, _v2.default)()
    })
  };
}

function remove(messageId) {
  return {
    type: _ActionTypes2.default.MESSAGE_BAR_REMOVE_MESSAGE,
    payload: (0, _immutable.Map)({
      messageId: messageId
    })
  };
}