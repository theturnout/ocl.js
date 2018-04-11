"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OclEngine = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _oclParser = require("./parser/oclParser");

var _utils = require("./utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The OclEngine class is the main entry point to the OCL.js library.
 *
 * This class allows to add new OCL expressions as well as evaluating given objects agains the saved OCL expressions.
 */
var OclEngine = exports.OclEngine = function () {
    _createClass(OclEngine, null, [{
        key: "create",

        /**
         * Static create method.
         *
         * @returns {OclEngine} a fresh new instance of the OclEngine
         */
        value: function create() {
            return new OclEngine();
        }
    }]);

    function OclEngine() {
        _classCallCheck(this, OclEngine);

        this.oclExpressionsPerType = {};
        this.typeDeterminerFn = undefined;
    }

    /**
     * Set a TypeDeterminer function that receives an object and returns the type of the object.
     *
     * @param {function} fn
     */


    _createClass(OclEngine, [{
        key: "setTypeDeterminer",
        value: function setTypeDeterminer(fn) {
            if (typeof fn === 'function') {
                OclEngine.Utils.typeDeterminerFn = fn;
            }
        }

        /**
         * Register a new OCL expression.
         *
         * Each OCL expression is added to a map of OCL expressions where the context is the key:
         * <pre>
         *     context Person inv: ...
         * </pre>
         *
         * Will be sorted into the map using "Person" as key. This allows faster lookup of OCL rules that should be applied
         * when running OclEngine.evaluate.
         *
         * @param {String} oclExpression The OCL expression as string. It will be parsed and added to the list of existing OCL expressions.
         * @returns {OclEngine} the current OclEngine object for chaining
         */

    }, {
        key: "addOclExpression",
        value: function addOclExpression(oclExpression) {
            var parsedExpression = _oclParser.OclParser.parse(oclExpression);
            this._addOclExpressionForType(parsedExpression.targetType, parsedExpression);
            return this;
        }
    }, {
        key: "_addOclExpressionForType",
        value: function _addOclExpressionForType(type, oclExpression) {
            var oclExpressions = this.getOclExpressionsForType(type);
            oclExpressions.push(oclExpression);
            this.oclExpressionsPerType[type] = oclExpressions;
        }

        /**
         * For a given type returns all registered OCL expressions.
         *
         * @param {String} type The type to lookup OCL expressions for.
         * @returns {Array} an array of {Expression}s.s
         */

    }, {
        key: "getOclExpressionsForType",
        value: function getOclExpressionsForType(type) {
            return this.oclExpressionsPerType[type] || [];
        }

        /**
         * This function actually evaluates the given object against the registered OCL expressions.
         *
         * @param {Object} obj The object which is going to be evaluated against registered OCL expressions.
         * @returns {OclResult} a result object, which contains the actual result and other info @see OclResult
         */

    }, {
        key: "evaluate",
        value: function evaluate(obj) {
            var type = this._inferType(obj);
            var oclExpressionsForType = this.getOclExpressionsForType(type);

            oclExpressionsForType.forEach(function (e) {
                e.evaluate(obj);
            });

            var failedInvs = oclExpressionsForType.filter(function (e) {
                return e.evaluationResult === false;
            });

            var namesOfFailedInvs = failedInvs.map(function (e) {
                return e.invs;
            }).reduce(function (p, c) {
                return p.concat(c);
            }, []).filter(function (i) {
                return i.evaluationResult === false;
            }).map(function (i) {
                return i.name || 'anonymous';
            });

            return new OclResult(namesOfFailedInvs.length === 0, namesOfFailedInvs);
        }

        /**
         * Tries to infer a type for the given object.
         *
         * @param obj
         * @return {String} type of the object
         * @private
         */

    }, {
        key: "_inferType",
        value: function _inferType(obj) {
            return _utils.Utils.getClassName(obj);
        }
    }]);

    return OclEngine;
}();

OclEngine.Utils = _utils.Utils;

/**
 * This class is a data class that is returned by OclEngine.evaluate method.
 *
 * It contains useful information about the evaluation result like the actual result (true / false) and in addition a list
 * of all names of invariants that have failed.
 */

var OclResult = function () {
    function OclResult(result, namesOfFailedInvs) {
        _classCallCheck(this, OclResult);

        this.setResult(result);
        this.setNamesOfFailedInvs(namesOfFailedInvs);
    }

    _createClass(OclResult, [{
        key: "setResult",
        value: function setResult(result) {
            this.result = result;
        }
    }, {
        key: "getResult",
        value: function getResult() {
            return this.result;
        }
    }, {
        key: "setNamesOfFailedInvs",
        value: function setNamesOfFailedInvs(names) {
            this.namesOfFailedInvs = Array.isArray(names) ? names : [];
        }
    }, {
        key: "getNamesOfFailedInvs",
        value: function getNamesOfFailedInvs() {
            return this.namesOfFailedInvs;
        }
    }]);

    return OclResult;
}();