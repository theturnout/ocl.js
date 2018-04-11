"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OclIsKindOfExpression = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _expression = require("./expression");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OclIsKindOfExpression = exports.OclIsKindOfExpression = function (_Expression) {
    _inherits(OclIsKindOfExpression, _Expression);

    function OclIsKindOfExpression(source, value) {
        _classCallCheck(this, OclIsKindOfExpression);

        var _this = _possibleConstructorReturn(this, (OclIsKindOfExpression.__proto__ || Object.getPrototypeOf(OclIsKindOfExpression)).call(this));

        _this.source = source;
        _this.value = value;
        return _this;
    }

    _createClass(OclIsKindOfExpression, [{
        key: "evaluate",
        value: function evaluate() {
            return this.source instanceof this.value;
        }
    }]);

    return OclIsKindOfExpression;
}(_expression.Expression);