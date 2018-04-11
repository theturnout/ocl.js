"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GateExpression = undefined;

var _expression = require("../expression");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GateExpression = exports.GateExpression = function (_Expression) {
    _inherits(GateExpression, _Expression);

    function GateExpression(left, right) {
        _classCallCheck(this, GateExpression);

        var _this = _possibleConstructorReturn(this, (GateExpression.__proto__ || Object.getPrototypeOf(GateExpression)).call(this));

        _this.left = left;
        _this.right = right;
        return _this;
    }

    return GateExpression;
}(_expression.Expression);