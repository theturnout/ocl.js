'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VariableExpression = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _expression = require('./expression');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VariableExpression = exports.VariableExpression = function (_Expression) {
    _inherits(VariableExpression, _Expression);

    function VariableExpression(variable) {
        _classCallCheck(this, VariableExpression);

        var _this = _possibleConstructorReturn(this, (VariableExpression.__proto__ || Object.getPrototypeOf(VariableExpression)).call(this));

        _this.variable = variable;
        return _this;
    }

    _createClass(VariableExpression, [{
        key: 'evaluate',
        value: function evaluate(obj, variables) {
            var o = void 0;
            var parts = this.variable.split('.');
            if (parts[0] === 'self') {
                parts.shift();
                o = obj;
            } else {
                o = variables;
            }

            o = this._resolvePath(o, parts.join('.'));

            return o;
        }
    }, {
        key: '_resolvePath',
        value: function _resolvePath(object, reference) {
            return reference.split('.').reduce(dot_deref, object);

            function dot_deref(o, ref) {
                if (!o) return;
                return !ref ? o : ref.split('[').reduce(arr_deref, o);
            }

            function arr_deref(o, ref, i) {
                if (!o) return;
                return !ref ? o : o[ref.slice(0, i ? -1 : ref.length)];
            }
        }
    }]);

    return VariableExpression;
}(_expression.Expression);