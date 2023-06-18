"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUser = fetchUser;

var _axios = _interopRequireDefault(require("axios"));

var _userAction = require("./userAction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function fetchUser() {
  return function (dispatch) {
    dispatch((0, _userAction.FetchUserRequest)());

    _axios["default"].get("https://jsonplaceholder.typicode.com/users").then(function (response) {
      var userData = response.data;
      dispatch((0, _userAction.FetchUserSuccess)(userData));
    })["catch"](function (error) {
      var errorMessage = error.message;
      dispatch((0, _userAction.FetchUserFailure)(errorMessage));
    });
  };
}