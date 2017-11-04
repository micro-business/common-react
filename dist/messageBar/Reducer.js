'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _InitialState2.default;
  var action = arguments[1];

  switch (action.type) {
    case _ActionTypes2.default.MESSAGE_BAR_ADD_MESSAGE:
      return state.update('messages', function (messages) {
        return messages.push(action.payload);
      });

    case _ActionTypes2.default.MESSAGE_BAR_REMOVE_MESSAGE:
      return state.update('messages', function (messages) {
        return messages.filterNot(function (_) {
          return _.get('messageId') === action.payload.get('messageId');
        });
      });

    default:
      return state;
  }
};

var _ActionTypes = require('./ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _InitialState = require('./InitialState');

var _InitialState2 = _interopRequireDefault(_InitialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }