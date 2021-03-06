"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsSetOperation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _expression = require("../expression");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AsSetOperation = exports.AsSetOperation = function (_Expression) {
    _inherits(AsSetOperation, _Expression);

    function AsSetOperation(source) {
        _classCallCheck(this, AsSetOperation);

        var _this = _possibleConstructorReturn(this, (AsSetOperation.__proto__ || Object.getPrototypeOf(AsSetOperation)).call(this));

        _this.source = source;
        return _this;
    }

    _createClass(AsSetOperation, [{
        key: "evaluate",
        value: function evaluate(obj) {
            var source = this.source.evaluate(obj);
            if (source instanceof Array) {
                return new Set(source);
            }
        }
    }]);

    return AsSetOperation;
}(_expression.Expression);