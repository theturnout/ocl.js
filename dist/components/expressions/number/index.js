"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _absExpression = require("./absExpression");

Object.keys(_absExpression).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _absExpression[key];
    }
  });
});