'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = exports.Utils = function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    _createClass(Utils, null, [{
        key: 'getClassName',
        value: function getClassName(obj) {
            if (typeof Utils.typeDeterminerFn === 'function') {
                return Utils.typeDeterminerFn(obj);
            }

            if (obj.typeName) {
                return obj.typeName;
            } else if (typeof obj === 'function') {
                return Utils._getFunctionName(obj);
            } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
                return Utils._getFunctionName(obj.constructor.toString());
            }
        }
    }, {
        key: '_getFunctionName',
        value: function _getFunctionName(fn) {
            var name = fn.toString().split(' ')[1];
            name = name.substring(0, name.indexOf('('));
            return name.length > 0 ? name : undefined;
        }
    }]);

    return Utils;
}();