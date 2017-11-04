'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notStarted = notStarted;
exports.checkingForUpdate = checkingForUpdate;
exports.downloadingUpdate = downloadingUpdate;
exports.installingUpdate = installingUpdate;
exports.succeeded = succeeded;
exports.failed = failed;
exports.clearError = clearError;

var _immutable = require('immutable');

var _ActionTypes = require('./ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function notStarted() {
  return {
    type: _ActionTypes2.default.APP_UPDATER_NOT_STARTED
  };
}

function checkingForUpdate() {
  return {
    type: _ActionTypes2.default.APP_UPDATER_CHECKING_FOR_UPDATE
  };
}

function downloadingUpdate(downloadProgress) {
  return {
    type: _ActionTypes2.default.APP_UPDATER_DOWNLOADING_UPDATE,
    payload: (0, _immutable.Map)({
      downloadProgress: downloadProgress
    })
  };
}

function installingUpdate() {
  return {
    type: _ActionTypes2.default.APP_UPDATER_INSTALLING_UPDATE
  };
}

function succeeded() {
  return {
    type: _ActionTypes2.default.APP_UPDATER_SUCCEEDED
  };
}

function failed(errorMessage) {
  return {
    type: _ActionTypes2.default.APP_UPDATER_FAILED,
    payload: (0, _immutable.Map)({
      errorMessage: errorMessage
    })
  };
}

function clearError() {
  return {
    type: _ActionTypes2.default.APP_UPDATER_CLEAR_ERROR
  };
}