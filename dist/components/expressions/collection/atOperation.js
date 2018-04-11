"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AtOperation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _expression = require("../expression");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtOperation = exports.AtOperation = function (_Expression) {
    _inherits(AtOperation, _Expression);

    function AtOperation(source, index) {
        _classCallCheck(this, AtOperation);

        var _this = _possibleConstructorReturn(this, (AtOperation.__proto__ || Object.getPrototypeOf(AtOperation)).call(this));

        _this.source = source;
        _this.index = index;
        return _this;
    }

    _createClass(AtOperation, [{
        key: "evaluate",
        value: function evaluate(obj) {
            var source = this.source.evaluate(obj);
            var index = this.index.evaluate(obj);

            if (source instanceof Array && Number.isInteger(index) && index >= 0 && index < source.length) {
                return source[index];
            }
        }
    }]);

    return AtOperation;
}(_expression.Expression);