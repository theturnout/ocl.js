"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NilExpression = undefined;

var _expression = require("./expression");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NilExpression = exports.NilExpression = function (_Expression) {
  _inherits(NilExpression, _Expression);

  function NilExpression() {
    _classCallCheck(this, NilExpression);

    return _possibleConstructorReturn(this, (NilExpression.__proto__ || Object.getPrototypeOf(NilExpression)).apply(this, arguments));
  }

  return NilExpression;
}(_expression.Expression);