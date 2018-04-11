"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SizeExpression = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _expression = require("../expression");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SizeExpression = exports.SizeExpression = function (_Expression) {
    _inherits(SizeExpression, _Expression);

    function SizeExpression(source) {
        _classCallCheck(this, SizeExpression);

        var _this = _possibleConstructorReturn(this, (SizeExpression.__proto__ || Object.getPrototypeOf(SizeExpression)).call(this));

        _this.source = source;
        return _this;
    }

    _createClass(SizeExpression, [{
        key: "evaluate",
        value: function evaluate(obj, variables) {
            var source = this.source.evaluate(obj, variables);
            if (source instanceof Array || source instanceof Map || source instanceof Set || typeof source === 'string') {
                return source.length;
            } else if (!source) {
                return 0;
            }

            throw new Error("Expected Collection, got " + (typeof source === "undefined" ? "undefined" : _typeof(source)));
        }
    }]);

    return SizeExpression;
}(_expression.Expression);