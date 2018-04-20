'use strict';
const should = require('should');

require('../../generator/oclParserGenerator');
import { OclParser } from "../../lib/components/parser/oclParser";

describe('Number', () => {
    it('should return abs value of -5.', () => {
        const oclExpression = `
            context Object inv:
                -5->abs() = 5
       `;

        const oclRule = OclParser.parse(oclExpression);
        let actual = oclRule.evaluate();
        actual.should.be.true();
    });
    it('should return abs value of -2.3.', () => {
        const oclExpression = `
            context Object inv:
                (-2.3)->abs() = 2.3
       `;

        const oclRule = OclParser.parse(oclExpression);
        let actual = oclRule.evaluate();
        actual.should.be.true();
    });
    it('should return floor value of 2.', () => {
        const oclExpression = `
            context Object inv:
                (2.3)->floor() = 2
       `;

        const oclRule = OclParser.parse(oclExpression);
        let actual = oclRule.evaluate();
        actual.should.be.true();
    });
    it('should return floor value of 3.', () => {
        const oclExpression = `
            context Object inv:
                (3.8)->floor() = 3
       `;

        const oclRule = OclParser.parse(oclExpression);
        let actual = oclRule.evaluate();
        actual.should.be.true();
    });
    it('should return max value of 6.', () => {
        const oclExpression = `
            context Object inv:
                6->max(3) = 6
       `;

        const oclRule = OclParser.parse(oclExpression);
        let actual = oclRule.evaluate();
        actual.should.be.true();
    });
    it('should return max value of 3.', () => {
        const oclExpression = `
            context Object inv:
                (2.3)->max(3) = 3
       `;

        const oclRule = OclParser.parse(oclExpression);
        let actual = oclRule.evaluate();
        actual.should.be.true();
    });
    it('should return min value of 2.3.', () => {
        const oclExpression = `
            context Object inv:
                (2.3)->min(3) = 2.3
       `;

        const oclRule = OclParser.parse(oclExpression);
        let actual = oclRule.evaluate();
        actual.should.be.true();
    });
    it('should return max value of 3.', () => {
        const oclExpression = `
            context Object inv:
                6->min(5.2) = 5.2
       `;

        const oclRule = OclParser.parse(oclExpression);
        let actual = oclRule.evaluate();
        actual.should.be.true();
    });
});