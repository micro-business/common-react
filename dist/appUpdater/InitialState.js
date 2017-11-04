'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _Status = require('./Status');

var _Status2 = _interopRequireDefault(_Status);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _immutable.Map)({
  status: _Status2.default.NOT_STARTED,
  errorMessage: '',
  downloadProgress: 0
});