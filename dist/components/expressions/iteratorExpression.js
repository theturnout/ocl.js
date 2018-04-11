"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IteratorExpression = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _expression = require("./expression");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IteratorExpression = exports.IteratorExpression = function (_Expression) {
    _inherits(IteratorExpression, _Expression);

    function IteratorExpression(source, iterators, body) {
        _classCallCheck(this, IteratorExpression);

        var _this = _possibleConstructorReturn(this, (IteratorExpression.__proto__ || Object.getPrototypeOf(IteratorExpression)).call(this));

        _this.source = source;
        _this.iterators = iterators;
        _this.body = body;
        return _this;
    }

    _createClass(IteratorExpression, [{
        key: "evaluate",
        value: function evaluate(obj) {
            var source = this.source.evaluate(obj);
            if (source instanceof Array) {
                if (!this.iterators || this.iterators.length === 0) {
                    return false;
                } else if (this.iterators.length === 1) {
                    return this._evaluateOneIterator(obj);
                } else if (this.iterators.length === 2) {
                    return this._evaluateTwoIterators(obj);
                }
            } else {
                return false;
            }
        }
    }, {
        key: "_evaluateOneIterator",
        value: function _evaluateOneIterator(obj) {
            var _this2 = this;

            var source = this.source.evaluate(obj);
            var variables = {};

            return !source.some(function (c) {
                variables[_this2.iterators[0]] = c;
                var result = _this2.body.evaluate(obj, variables) === false;
                variables[_this2.iterators[0]] = null;
                return result;
            });
        }
    }, {
        key: "_evaluateTwoIterators",
        value: function _evaluateTwoIterators(obj) {
            var source = this.source.evaluate(obj);
            var sourceLength = source.length;
            var variables = {};

            for (var i = 0; i < sourceLength; i++) {
                variables[this.iterators[0]] = source[i];

                for (var j = i + 1; j < sourceLength; j++) {
                    variables[this.iterators[1]] = source[j];
                    var items = this.body.evaluate(obj, variables);

                    variables[this.iterators[1]] = null;

                    if (items === false) {
                        variables[this.iterators[0]] = null;
                        return false;
                    }
                }

                variables[this.iterators[0]] = null;
            }

            return true;
        }
    }]);

    return IteratorExpression;
}(_expression.Expression);