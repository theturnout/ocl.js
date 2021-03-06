"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MathExpression = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _expression = require("../expression");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MathExpression = exports.MathExpression = function (_Expression) {
    _inherits(MathExpression, _Expression);

    function MathExpression(left, right) {
        _classCallCheck(this, MathExpression);

        var _this = _possibleConstructorReturn(this, (MathExpression.__proto__ || Object.getPrototypeOf(MathExpression)).call(this));

        _this.left = left;
        _this.right = right;
        return _this;
    }

    _createClass(MathExpression, [{
        key: "evaluate",
        value: function evaluate(obj, variables) {
            var left = this.left.evaluate(obj, variables);
            var right = this.right.evaluate(obj, variables);
            right = this.right.left ? this.right.left.evaluate(obj) : right;
            return { left: left, right: right };
        }
    }]);

    return MathExpression;
}(_expression.Expression);