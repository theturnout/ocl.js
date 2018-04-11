"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StringExpression = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _literalExpression = require("./literalExpression");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StringExpression = exports.StringExpression = function (_LiteralExpression) {
    _inherits(StringExpression, _LiteralExpression);

    function StringExpression() {
        _classCallCheck(this, StringExpression);

        return _possibleConstructorReturn(this, (StringExpression.__proto__ || Object.getPrototypeOf(StringExpression)).apply(this, arguments));
    }

    _createClass(StringExpression, [{
        key: "parseValue",
        value: function parseValue(value) {
            return value.replace(/^\"|\"$/g, '');
        }
    }, {
        key: "evaluate",
        value: function evaluate() {
            return this.value;
        }
    }]);

    return StringExpression;
}(_literalExpression.LiteralExpression);