'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _InitialState2.default;
  var action = arguments[1];

  switch (action.type) {
    case _ActionTypes2.default.NOTIFICATION_ADD_NOTIFICATION:
      return state.setIn(['notifications', action.payload.get('id')], Map({ message: action.payload.get('message'), type: action.payload.get('type') }));

    case _ActionTypes2.default.NOTIFICATION_REMOVE_NOTIFICATION:
      return state.deleteIn(['notifications', action.payload.get('id')]);

    default:
      return state;
  }
};

var _ActionTypes = require('./ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _InitialState = require('./InitialState');

var _InitialState2 = _interopRequireDefault(_InitialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }