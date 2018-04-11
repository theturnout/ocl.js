"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SelectExpression = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _expression = require("./expression");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectExpression = exports.SelectExpression = function (_Expression) {
    _inherits(SelectExpression, _Expression);

    function SelectExpression(source, iterator, body) {
        _classCallCheck(this, SelectExpression);

        var _this = _possibleConstructorReturn(this, (SelectExpression.__proto__ || Object.getPrototypeOf(SelectExpression)).call(this));

        _this.source = source;
        _this.iterators = iterator;
        _this.body = body;
        return _this;
    }

    _createClass(SelectExpression, [{
        key: "evaluate",
        value: function evaluate(obj) {
            var _this2 = this;

            var collection = this.source.evaluate(obj);
            if (collection instanceof Array) {
                return collection.filter(function (c) {
                    var variables = {};
                    if (_this2.iterators) {
                        variables[_this2.iterators[0]] = c;
                    } else {
                        variables = c;
                    }

                    return _this2.body.evaluate(c, variables);
                });
            } else {
                return [];
            }
        }
    }]);

    return SelectExpression;
}(_expression.Expression);