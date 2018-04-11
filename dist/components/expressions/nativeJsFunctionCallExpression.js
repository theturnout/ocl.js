"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NativeJsFunctionCallExpression = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _expression = require("./expression");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NativeJsFunctionCallExpression = exports.NativeJsFunctionCallExpression = function (_Expression) {
    _inherits(NativeJsFunctionCallExpression, _Expression);

    function NativeJsFunctionCallExpression(source, fn, params) {
        _classCallCheck(this, NativeJsFunctionCallExpression);

        var _this = _possibleConstructorReturn(this, (NativeJsFunctionCallExpression.__proto__ || Object.getPrototypeOf(NativeJsFunctionCallExpression)).call(this));

        _this.source = source;
        _this.fn = fn;

        _this.params = (params || []).filter(function (param) {
            return !!param;
        });
        return _this;
    }

    _createClass(NativeJsFunctionCallExpression, [{
        key: "evaluate",
        value: function evaluate(obj) {
            var source = this.source.evaluate(obj);
            var params = this.params.map(function (param) {
                return param.evaluate(obj);
            });

            if (!source) {
                return false;
            }

            var fn = source[this.fn];
            var isFunction = typeof fn === 'function';
            return isFunction ? fn.apply(source, params) : false;
        }
    }]);

    return NativeJsFunctionCallExpression;
}(_expression.Expression);