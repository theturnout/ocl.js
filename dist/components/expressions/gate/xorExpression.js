"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.XorExpression = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gateExpression = require("./gateExpression");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XorExpression = exports.XorExpression = function (_GateExpression) {
    _inherits(XorExpression, _GateExpression);

    function XorExpression() {
        _classCallCheck(this, XorExpression);

        return _possibleConstructorReturn(this, (XorExpression.__proto__ || Object.getPrototypeOf(XorExpression)).apply(this, arguments));
    }

    _createClass(XorExpression, [{
        key: "evaluate",
        value: function evaluate(obj, variables) {
            var left = this.left.evaluate(obj, variables);
            var right = this.right.evaluate(obj, variables);

            return !!(left ^ right);
        }
    }]);

    return XorExpression;
}(_gateExpression.GateExpression);