'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Operator = exports.OperationCallExpression = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _expression = require('./expression');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OperationCallExpression = exports.OperationCallExpression = function (_Expression) {
    _inherits(OperationCallExpression, _Expression);

    function OperationCallExpression(operator, left, right) {
        _classCallCheck(this, OperationCallExpression);

        var _this = _possibleConstructorReturn(this, (OperationCallExpression.__proto__ || Object.getPrototypeOf(OperationCallExpression)).call(this));

        _this.operator = operator;
        _this.left = left;
        _this.right = right;
        return _this;
    }

    _createClass(OperationCallExpression, [{
        key: 'evaluate',
        value: function evaluate(obj, variables) {
            var left = this.left.evaluate(obj, variables);
            var right = this.right.evaluate(obj, variables);

            if (this.operator === Operator.NOT_EQUAL) {
                return left !== right;
            } else if (this.operator === Operator.LESS_EQUAL_THAN) {
                return left <= right;
            } else if (this.operator === Operator.GREATER_EQUAL_THAN) {
                return left >= right;
            } else if (this.operator === Operator.GREATER_THAN) {
                return left > right;
            } else if (this.operator === Operator.LESS_THAN) {
                return left < right;
            } else if (this.operator === Operator.EQUAL) {
                return left === right;
            }

            throw new SyntaxError('Unhandled operator found: \'' + this.operator + '\'');
        }
    }]);

    return OperationCallExpression;
}(_expression.Expression);

var Operator = exports.Operator = {
    NOT_EQUAL: '<>',
    LESS_EQUAL_THAN: '<=',
    GREATER_EQUAL_THAN: '>=',
    GREATER_THAN: '>',
    LESS_THAN: '<',
    EQUAL: '='
};