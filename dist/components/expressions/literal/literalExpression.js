"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LiteralExpression = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _expression = require("../expression");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LiteralExpression = exports.LiteralExpression = function (_Expression) {
    _inherits(LiteralExpression, _Expression);

    function LiteralExpression(value) {
        _classCallCheck(this, LiteralExpression);

        var _this = _possibleConstructorReturn(this, (LiteralExpression.__proto__ || Object.getPrototypeOf(LiteralExpression)).call(this));

        _this.value = _this.parseValue(value);
        return _this;
    }

    _createClass(LiteralExpression, [{
        key: "parseValue",
        value: function parseValue(value) {
            throw new Error('parseValue() function not implemented!');
        }
    }, {
        key: "evaluate",
        value: function evaluate() {
            return this.value;
        }
    }]);

    return LiteralExpression;
}(_expression.Expression);