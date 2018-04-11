"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LastOperation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _expression = require("../expression");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LastOperation = exports.LastOperation = function (_Expression) {
    _inherits(LastOperation, _Expression);

    function LastOperation(source) {
        _classCallCheck(this, LastOperation);

        var _this = _possibleConstructorReturn(this, (LastOperation.__proto__ || Object.getPrototypeOf(LastOperation)).call(this));

        _this.source = source;
        return _this;
    }

    _createClass(LastOperation, [{
        key: "evaluate",
        value: function evaluate(obj) {
            var source = this.source.evaluate(obj);
            if (source instanceof Array) {
                return source[source.length - 1];
            }
        }
    }]);

    return LastOperation;
}(_expression.Expression);