"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buyIceCream = void 0;

var _IceCreamType = require("./IceCreamType");

var buyIceCream = function buyIceCream() {
  return {
    type: _IceCreamType.BUY_ICECREAM
  };
};

exports.buyIceCream = buyIceCream;