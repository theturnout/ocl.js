"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExistsExpression = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _expression = require("./expression");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExistsExpression = exports.ExistsExpression = function (_Expression) {
    _inherits(ExistsExpression, _Expression);

    function ExistsExpression(source, iterators, body) {
        _classCallCheck(this, ExistsExpression);

        var _this = _possibleConstructorReturn(this, (ExistsExpression.__proto__ || Object.getPrototypeOf(ExistsExpression)).call(this));

        _this.source = source;
        _this.iterators = iterators;
        _this.body = body;
        return _this;
    }

    _createClass(ExistsExpression, [{
        key: "evaluate",
        value: function evaluate(obj) {
            var _this2 = this;

            var collection = this.source.evaluate(obj);
            if (collection instanceof Array) {
                return collection.some(function (o) {
                    var variables = {};
                    variables[_this2.iterators] = o;
                    return _this2.body.evaluate(o, variables);
                });
            } else {
                return false;
            }
        }
    }, {
        key: "toString",
        value: function toString() {
            return "[source=" + this.source + ", iterators=" + this.iterators + ", body=" + this.body + "]";
        }
    }]);

    return ExistsExpression;
}(_expression.Expression);