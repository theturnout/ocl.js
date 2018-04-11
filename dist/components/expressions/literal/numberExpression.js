"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NumberExpression = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _literalExpression = require("./literalExpression");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberExpression = exports.NumberExpression = function (_LiteralExpression) {
    _inherits(NumberExpression, _LiteralExpression);

    function NumberExpression() {
        _classCallCheck(this, NumberExpression);

        return _possibleConstructorReturn(this, (NumberExpression.__proto__ || Object.getPrototypeOf(NumberExpression)).apply(this, arguments));
    }

    _createClass(NumberExpression, [{
        key: "parseValue",
        value: function parseValue(value) {
            if (!isNaN(+value)) {
                return +value;
            } else {
                throw new SyntaxError("NumberExpression: '" + value + "' is not a Number!");
            }
        }
    }, {
        key: "evaluate",
        value: function evaluate() {
            return this.value;
        }
    }]);

    return NumberExpression;
}(_literalExpression.LiteralExpression);