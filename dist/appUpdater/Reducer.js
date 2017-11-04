'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _InitialState2.default;
  var action = arguments[1];

  switch (action.type) {
    case _ActionTypes2.default.APP_UPDATER_NOT_STARTED:
      return (0, _immutable.Map)({
        status: _Status2.default.NOT_STARTED,
        errorMessage: '',
        downloadProgress: 0
      });

    case _ActionTypes2.default.APP_UPDATER_CHECKING_FOR_UPDATE:
      return (0, _immutable.Map)({
        status: _Status2.default.CHECKING_FOR_UPDATE,
        errorMessage: '',
        downloadProgress: 0
      });

    case _ActionTypes2.default.APP_UPDATER_DOWNLOADING_UPDATE:
      return (0, _immutable.Map)({
        status: _Status2.default.DOWNLOADING_UPDATE,
        errorMessage: '',
        downloadProgress: action.payload.get('downloadProgress')
      });

    case _ActionTypes2.default.APP_UPDATER_INSTALLING_UPDATE:
      return (0, _immutable.Map)({
        status: _Status2.default.INSTALLING_UPDATE,
        errorMessage: '',
        downloadProgress: 0
      });

    case _ActionTypes2.default.APP_UPDATER_SUCCEEDED:
      return (0, _immutable.Map)({
        status: _Status2.default.SUCCEEDED,
        errorMessage: '',
        downloadProgress: 0
      });

    case _ActionTypes2.default.APP_UPDATER_FAILED:
      return (0, _immutable.Map)({
        status: _Status2.default.FAILED,
        errorMessage: action.payload.get('errorMessage'),
        downloadProgress: 0
      });

    case _ActionTypes2.default.APP_UPDATER_CLEAR_ERROR:
      return state.set('errorMessage', '');

    default:
      return state;
  }
};

var _immutable = require('immutable');

var _ActionTypes = require('./ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _InitialState = require('./InitialState');

var _InitialState2 = _interopRequireDefault(_InitialState);

var _Status = require('./Status');

var _Status2 = _interopRequireDefault(_Status);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }