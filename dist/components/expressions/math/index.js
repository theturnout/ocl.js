'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _additionExpression = require('./additionExpression');

Object.keys(_additionExpression).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _additionExpression[key];
    }
  });
});

var _divideExpression = require('./divideExpression');

Object.keys(_divideExpression).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _divideExpression[key];
    }
  });
});

var _moduloExpression = require('./moduloExpression');

Object.keys(_moduloExpression).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _moduloExpression[key];
    }
  });
});

var _multiplyExpression = require('./multiplyExpression');

Object.keys(_multiplyExpression).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _multiplyExpression[key];
    }
  });
});

var _substractionExpression = require('./substractionExpression');

Object.keys(_substractionExpression).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _substractionExpression[key];
    }
  });
});