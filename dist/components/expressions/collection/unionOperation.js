"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnionOperation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _expression = require("../expression");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnionOperation = exports.UnionOperation = function (_Expression) {
    _inherits(UnionOperation, _Expression);

    function UnionOperation(source, body) {
        _classCallCheck(this, UnionOperation);

        var _this = _possibleConstructorReturn(this, (UnionOperation.__proto__ || Object.getPrototypeOf(UnionOperation)).call(this));

        _this.source = source;
        _this.body = body;
        return _this;
    }

    _createClass(UnionOperation, [{
        key: "evaluate",
        value: function evaluate(obj) {
            var source = this.source.evaluate(obj);
            var body = this.body.evaluate(obj);

            if (source instanceof Array && body instanceof Array) {
                return source.concat(body);
            }
            return [];
        }
    }]);

    return UnionOperation;
}(_expression.Expression);