"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _CakeReducer = _interopRequireDefault(require("./Cake/Cake/CakeReducer"));

var _IceCreamReducer = _interopRequireDefault(require("./Cake/IceCream/IceCreamReducer"));

var _userReducer = require("./User/userReducer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _redux.combineReducers)({
  cake: _CakeReducer["default"],
  iceCream: _IceCreamReducer["default"],
  user: _userReducer.userReducer
});
var _default = rootReducer;
exports["default"] = _default;