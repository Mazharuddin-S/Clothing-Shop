"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buyCake = void 0;

var _CakeTypes = require("./CakeTypes");

var buyCake = function buyCake() {
  var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return {
    type: _CakeTypes.BUY_CAKE,
    payload: number
  };
};

exports.buyCake = buyCake;