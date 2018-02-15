'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.remove = remove;

var _immutable = require('immutable');

var _cuid = require('cuid');

var _cuid2 = _interopRequireDefault(_cuid);

var _ActionTypes = require('./ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function add(message, type) {
  return {
    type: _ActionTypes2.default.NOTIFICATION_ADD_NOTIFICATION,
    payload: (0, _immutable.Map)({
      id: (0, _cuid2.default)(),
      message: message,
      type: type
    })
  };
}

function remove(id) {
  return {
    type: _ActionTypes2.default.NOTIFICATION_REMOVE_NOTIFICATION,
    payload: (0, _immutable.Map)({
      id: id
    })
  };
}