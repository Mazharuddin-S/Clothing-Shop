"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FetchUserFailure = exports.FetchUserSuccess = exports.FetchUserRequest = void 0;

var _userActionType = require("./userActionType");

var FetchUserRequest = function FetchUserRequest() {
  return {
    type: _userActionType.FETCH_USER_REQUEST
  };
};

exports.FetchUserRequest = FetchUserRequest;

var FetchUserSuccess = function FetchUserSuccess(userData) {
  return {
    type: _userActionType.FETCH_USER_SUCCESS,
    payload: userData
  };
};

exports.FetchUserSuccess = FetchUserSuccess;

var FetchUserFailure = function FetchUserFailure(errorMessage) {
  return {
    type: _userActionType.FETCH_USER_FAILURE,
    payload: errorMessage
  };
};

exports.FetchUserFailure = FetchUserFailure;