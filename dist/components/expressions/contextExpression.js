"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ContextExpression = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _expression = require("./expression");

var _invariantExpression = require("./invariantExpression");

var _letExpression = require("./letExpression");

var _utils = require("../utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContextExpression = exports.ContextExpression = function (_Expression) {
    _inherits(ContextExpression, _Expression);

    function ContextExpression(targetType, rules) {
        _classCallCheck(this, ContextExpression);

        var _this = _possibleConstructorReturn(this, (ContextExpression.__proto__ || Object.getPrototypeOf(ContextExpression)).call(this));

        if (!(rules instanceof Array)) {
            rules = [rules];
        }

        _this.targetType = targetType;
        _this.invs = rules.filter(function (i) {
            return i instanceof _invariantExpression.InvariantExpression;
        });
        _this.defs = rules.filter(function (i) {
            return i instanceof _letExpression.LetExpression;
        });
        return _this;
    }

    _createClass(ContextExpression, [{
        key: "evaluate",
        value: function evaluate(obj) {
            obj = obj || {};

            if (this.targetType === this._getClassName(obj)) {
                this.defs.forEach(function (def) {
                    return def.evaluate(obj);
                });
                this.evaluationResult = !this.invs.some(function (i) {
                    return i.evaluate(obj) === false;
                });
                return this.evaluationResult;
            }

            return false;
        }
    }, {
        key: "_getClassName",
        value: function _getClassName(obj) {
            return _utils.Utils.getClassName(obj);
        }
    }]);

    return ContextExpression;
}(_expression.Expression);